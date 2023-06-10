import bcrypt from 'bcryptjs';
import { registerSchema } from 'common/validations';
import { authenticate } from 'graphql/authenticate';
import { Context } from 'graphql/context';
import { MutationResolvers } from 'graphql/generated/resolvers';
import {
  MutationAddBoardArgs,
  MutationAddCommentArgs,
  MutationAddTaskArgs,
  MutationChangeBoardVisibilityArgs,
  MutationDeleteCommentArgs,
  MutationEditCommentArgs,
  MutationRegisterArgs,
  MutationRemoveUserFromBoardArgs,
  MutationSetBoardUsersArgs,
  MutationUpdateBoardDescriptionArgs,
  MutationUpdateTaskDescriptionArgs,
  MutationUpdateTaskImageArgs,
  MutationUpdateTaskPositionArgs,
} from 'graphql/generated/types';

const register = async (_parent: unknown, args: MutationRegisterArgs, context: Context) => {
  const { credentials } = args;
  const { email, password, name } = credentials;

  await registerSchema.validate({ email, name, password });

  const foundUser = await context.prisma.user.findFirst({
    where: {
      AND: [
        {
          email,
        },
        {
          origin: 'LOCAL',
        },
      ],
    },
  });

  if (foundUser) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await context.prisma.user.create({
    data: {
      email,
      name,
      origin: 'LOCAL',
      password: hashedPassword,
    },
  });

  return user;
};

const addBoard = async (_parent: unknown, args: MutationAddBoardArgs, context: Context) => {
  const { session } = await authenticate(context);

  const { board } = args;
  const { name, image, visibility, description } = board;

  const newBoard = await context.prisma.board.create({
    data: {
      columns: {
        createMany: {
          data: [
            {
              name: 'BACKLOG',
            },
            {
              name: 'IN_PROGRESS',
            },
            {
              name: 'QA',
            },
            {
              name: 'DONE',
            },
          ],
        },
      },
      description,
      image,
      name,
      owner: {
        connect: {
          id: session.user.id,
        },
      },
      users: {
        connect: {
          id: session.user.id,
        },
      },
      visibility,
    },
    include: {
      columns: true,
      users: true,
    },
  });

  return newBoard;
};

const changeBoardVisibility = async (
  _parent: unknown,
  args: MutationChangeBoardVisibilityArgs,
  context: Context,
) => {
  await authenticate(context);
  const { visbility } = args;

  const board = await context.prisma.board.update({
    data: {
      visibility: visbility.visibility,
    },
    where: {
      id: visbility.id,
    },
  });

  return board;
};

const setBoardUsers = async (
  _parent: unknown,
  args: MutationSetBoardUsersArgs,
  context: Context,
) => {
  await authenticate(context);
  const { users } = args;

  const boardOwner = await context.prisma.board.findUnique({
    select: {
      ownerId: true,
    },
    where: {
      id: users.boardId,
    },
  });

  if (!boardOwner?.ownerId) return;

  await context.prisma.board.update({
    data: {
      usersIds: {
        set: [boardOwner.ownerId],
      },
    },
    where: {
      id: users.boardId,
    },
  });

  const usersIds = users.userIds as string[];

  const board = await context.prisma.board.update({
    data: {
      usersIds: {
        push: usersIds,
      },
    },
    where: {
      id: users.boardId,
    },
  });

  await context.prisma.user.updateMany({
    data: {
      boardsIds: {
        set: [],
      },
    },
    where: {
      AND: [
        {
          boardsIds: {
            has: users.boardId,
          },
        },
        {
          id: {
            not: boardOwner?.ownerId,
          },
        },
      ],
    },
  });

  await Promise.all(
    users.userIds.map(async id => {
      if (typeof id === 'string')
        await context.prisma.user.update({
          data: {
            boardsIds: {
              set: users.boardId,
            },
          },
          where: {
            id,
          },
        });
    }),
  );

  return board;
};

const addTask = async (_parent: unknown, args: MutationAddTaskArgs, context: Context) => {
  const { session } = await authenticate(context);
  const { task } = args;

  const userId = session.user.id;

  const tasksCount = await context.prisma.task.count({
    where: {
      columnId: task.columnId,
    },
  });

  const newTask = await context.prisma.task.create({
    data: {
      boardId: task.boardId,
      columnId: task.columnId,
      name: task.name,
      order: tasksCount,
      userId,
    },
  });

  return newTask;
};

const removeUserFromBoard = async (
  _parent: unknown,
  args: MutationRemoveUserFromBoardArgs,
  context: Context,
) => {
  await authenticate(context);
  const { board } = args;

  const usersIds = await context.prisma.board.findUnique({
    select: {
      usersIds: true,
    },
    where: {
      id: board.boardId,
    },
  });

  const boardsIds = await context.prisma.user.findUnique({
    select: {
      boardsIds: true,
    },
    where: {
      id: board.userId,
    },
  });

  const updatedBoard = await context.prisma.board.update({
    data: {
      usersIds: {
        set: usersIds?.usersIds.filter(id => id !== board.userId),
      },
    },
    where: {
      id: board.boardId,
    },
  });

  await context.prisma.user.update({
    data: {
      boardsIds: {
        set: boardsIds?.boardsIds.filter(id => id !== board.boardId),
      },
    },
    where: {
      id: board.userId,
    },
  });

  return updatedBoard;
};

const updateTaskPosition = async (
  _parent: unknown,
  args: MutationUpdateTaskPositionArgs,
  context: Context,
) => {
  await authenticate(context);
  const { position } = args;
  const { newIndex, newColumnId, taskId } = position;

  const oldTask = await context.prisma.task.findUnique({
    select: {
      columnId: true,
    },
    where: {
      id: taskId,
    },
  });

  const updatedTask = await context.prisma.task.update({
    data: {
      columnId: newColumnId,
    },
    where: {
      id: taskId,
    },
  });

  const oldColumn = await context.prisma.column.findUnique({
    select: {
      tasks: {
        orderBy: {
          order: 'asc',
        },
        select: {
          id: true,
        },
      },
    },
    where: {
      id: oldTask?.columnId,
    },
  });

  if (oldColumn?.tasks.length) {
    Promise.all(
      oldColumn?.tasks.map(async (task, index) => {
        await context.prisma.task.update({
          data: { order: index },
          where: {
            id: task.id,
          },
        });
      }),
    );
  }

  const newColumn = await context.prisma.column.findUnique({
    select: {
      tasks: {
        orderBy: {
          order: 'asc',
        },
      },
    },
    where: {
      id: newColumnId,
    },
  });

  const tasksArrayWithoutUpdatedTask = newColumn?.tasks
    .filter(task => task.id !== updatedTask.id)
    .sort((a, b) => a.order - b.order);

  if (!tasksArrayWithoutUpdatedTask) return;

  tasksArrayWithoutUpdatedTask.splice(newIndex, 0, updatedTask);

  const reorderedTasksArray = tasksArrayWithoutUpdatedTask.map((task, index) => ({
    ...task,
    order: index,
  }));

  if (reorderedTasksArray.length) {
    Promise.all(
      reorderedTasksArray.map(async task => {
        await context.prisma.task.update({
          data: { order: task.order },
          where: {
            id: task.id,
          },
        });
      }),
    );
  }

  return updatedTask;
};

const updateBoardDescription = async (
  _parent: unknown,
  args: MutationUpdateBoardDescriptionArgs,
  context: Context,
) => {
  await authenticate(context);
  const { board } = args;

  const updatedBoard = await context.prisma.board.update({
    data: {
      description: board.description,
    },
    where: {
      id: board.boardId,
    },
  });

  return updatedBoard;
};

const updateTaskDescription = async (
  _parent: unknown,
  args: MutationUpdateTaskDescriptionArgs,
  context: Context,
) => {
  await authenticate(context);
  const { task } = args;
  const { taskId, description } = task;

  const updatedTask = await context.prisma.task.update({
    data: { description },
    where: {
      id: taskId,
    },
  });

  return updatedTask;
};

const updateTaskImage = async (
  _parent: unknown,
  args: MutationUpdateTaskImageArgs,
  context: Context,
) => {
  await authenticate(context);
  const { task } = args;
  const { taskId, image } = task;

  const updatedTask = await context.prisma.task.update({
    data: { image },
    where: {
      id: taskId,
    },
  });

  return updatedTask;
};

const addComment = async (_parent: unknown, args: MutationAddCommentArgs, context: Context) => {
  const { session } = await authenticate(context);
  const { comment } = args;
  const { taskId, content } = comment;

  const userId = session.user.id;

  const createdComment = await context.prisma.comment.create({
    data: {
      content,
      taskId,
      userId,
    },
    include: {
      user: true,
    },
  });

  return createdComment;
};

const editComment = async (_parent: unknown, args: MutationEditCommentArgs, context: Context) => {
  await authenticate(context);
  const { comment } = args;
  const { commentId, content } = comment;

  const editedComment = await context.prisma.comment.update({
    data: {
      content,
    },
    where: {
      id: commentId,
    },
  });

  return editedComment;
};

const deleteComment = async (
  _parent: unknown,
  args: MutationDeleteCommentArgs,
  context: Context,
) => {
  await authenticate(context);
  const { id } = args;

  const deletedComment = await context.prisma.comment.delete({
    where: {
      id,
    },
  });

  return deletedComment;
};

export const mutation: MutationResolvers = {
  addBoard,
  addComment,
  addTask,
  changeBoardVisibility,
  deleteComment,
  editComment,
  register,
  removeUserFromBoard,
  setBoardUsers,
  updateBoardDescription,
  updateTaskDescription,
  updateTaskImage,
  updateTaskPosition,
};
