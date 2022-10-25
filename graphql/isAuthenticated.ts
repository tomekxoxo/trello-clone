import { GraphQLError } from 'graphql';
import type { Context } from 'graphql/context';
import { getSession } from 'next-auth/react';

export const isAuthenticated = async (context: Context) => {
  const { req } = context;
  const session = await getSession({ req });

  if (!session) {
    throw new GraphQLError('User is not authenticated', {
      extensions: {
        code: 'UNAUTHENTICATED',
        http: { status: 401 },
      },
    });
  }

  return;
};
