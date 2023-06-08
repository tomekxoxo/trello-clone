import { authenticate } from 'graphql/authenticate';
import type { Context } from 'graphql/context';
import { QueryResolvers } from 'graphql/generated/resolvers';
import {
  QueryBoardArgs,
  QueryBoardUsersArgs,
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

const usersNotAssignedToBoard = async (
  _parent: unknown,
  args: QueryUsersNotAssignedToBoardArgs,
  context: Context,
) => {
  await authenticate(context);
  const users = await context.prisma.user.findMany({
    where: {
      NOT: {
        boardsIds: {
          has: args.boardId,
        },
      },
    },
  });
  return users;
};

const board = async (_parent: unknown, args: QueryBoardArgs, context: Context) => {
  await authenticate(context);
  const board = await context.prisma.board.findUnique({
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

export const query: QueryResolvers = { board, boardUsers, boards, users, usersNotAssignedToBoard };
