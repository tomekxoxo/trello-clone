import bcrypt from 'bcryptjs';
import { registerSchema } from 'common/validations';
import { authenticate } from 'graphql/authenticate';
import { Context } from 'graphql/context';
import { MutationResolvers } from 'graphql/generated/resolvers';
import {
  MutationAddBoardArgs,
  MutationAddTaskArgs,
  MutationAddUsersToBoardArgs,
  MutationChangeBoardVisibilityArgs,
  MutationRegisterArgs,
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

const addUsersToBoard = async (
  _parent: unknown,
  args: MutationAddUsersToBoardArgs,
  context: Context,
) => {
  await authenticate(context);
  const { users } = args;

  const board = Promise.all(
    users.userIds.map(async id => {
      if (typeof id === 'string')
        await context.prisma.board.update({
          data: {
            usersIds: {
              push: id,
            },
          },
          where: {
            id: users.boardId,
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

export const mutation: MutationResolvers = {
  addBoard,
  addTask,
  addUsersToBoard,
  changeBoardVisibility,
  register,
  updateTaskPosition,
};
