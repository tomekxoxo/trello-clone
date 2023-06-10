import { authenticate } from 'graphql/authenticate';
import type { Context } from 'graphql/context';
import { QueryResolvers } from 'graphql/generated/resolvers';
import {
  QueryBoardArgs,
  QueryBoardUsersArgs,
  QueryTaskArgs,
  QueryUsersNotAssignedToBoardArgs,
} from 'graphql/generated/types';

const users = async (_parent: unknown, _args: unknown, context: Context) => {
  await authenticate(context);
  const users = await context.prisma.user.findMany();
  return users;
};

const boardUsers = async (_parent: unknown, args: QueryBoardUsersArgs, context: Context) => {
  await authenticate(context);
  const users = await context.prisma.user.findMany({
    where: {
      boardsIds: {
        has: args.id,
      },
    },
  });
  return users;
};

const task = async (_parent: unknown, args: QueryTaskArgs, context: Context) => {
  await authenticate(context);
  const { id } = args;

  const users = await context.prisma.task.findUnique({
    include: {
      column: true,
      comments: {
        include: {
          user: true,
        },
      },
      labels: true,
      user: true,
    },
    where: {
      id,
    },
  });
  return users;
};

const usersNotAssignedToBoard = async (
  _parent: unknown,
  args: QueryUsersNotAssignedToBoardArgs,
  context: Context,
) => {
  await authenticate(context);
  const { board } = args;

  const users = await context.prisma.user.findMany({
    where: {
      id: {
        not: board.ownerId,
      },
    },
  });
  return users;
};

const board = async (_parent: unknown, args: QueryBoardArgs, context: Context) => {
  await authenticate(context);
  const board = await context.prisma.board.findUnique({
    include: {
      columns: {
        include: {
          tasks: {
            include: {
              comments: {
                include: {
                  user: true,
                },
              },
              labels: true,
            },
            orderBy: { order: 'asc' },
          },
        },
      },
      owner: {
        select: {
          name: true,
        },
      },
      users: {
        select: {
          id: true,
          image: true,
          name: true,
          ownerBoards: true,
        },
      },
    },
    where: {
      id: args.id,
    },
  });
  return board;
};

const boards = async (_parent: unknown, _args: unknown, context: Context) => {
  const { session } = await authenticate(context);
  const boards = await context.prisma.board.findMany({
    include: {
      users: true,
    },
    where: {
      OR: [
        {
          usersIds: {
            has: session.user.id,
          },
        },
        {
          visibility: 'PUBLIC',
        },
      ],
    },
  });

  return boards;
};

export const query: QueryResolvers = {
  board,
  boardUsers,
  boards,
  task,
  users,
  usersNotAssignedToBoard,
};
