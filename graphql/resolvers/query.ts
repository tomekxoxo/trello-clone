import { authenticate } from 'graphql/authenticate';
import type { Context } from 'graphql/context';
import { QueryResolvers } from 'graphql/generated/resolvers';

const users = async (_parent: unknown, _args: unknown, context: Context) => {
  await authenticate(context);
  const users = await context.prisma.user.findMany();
  return users;
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

export const query: QueryResolvers = { boards, users };
