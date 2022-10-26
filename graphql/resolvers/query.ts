import type { Context } from 'graphql/context';
import { isAuthenticated } from 'graphql/isAuthenticated';
import type { QueryResolvers } from 'graphql/typesGen';

const users = async (_parent: unknown, _args: unknown, context: Context) => {
  isAuthenticated(context);
  const users = await context.prisma.user.findMany();
  return users;
};

export const query: QueryResolvers = { users };
