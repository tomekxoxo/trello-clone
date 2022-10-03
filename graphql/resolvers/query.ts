import { authenticate } from 'graphql/auth';
import type { Context } from 'graphql/context';
import type { QueryResolvers } from 'graphql/typesGen';

const users = async (_parent: unknown, _args: unknown, context: Context) => {
  authenticate(context.req);
  const users = await context.prisma.user.findMany();
  return users;
};

export const query: QueryResolvers = { users };
