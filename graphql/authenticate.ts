import { GraphQLError } from 'graphql';
import { Context } from 'graphql/context';
import { Session } from 'next-auth';

export const authenticate = async (context: Context): Promise<{ session: Session }> => {
  const { session } = context;

  if (!session) {
    throw new GraphQLError('User is not authenticated', {
      extensions: {
        code: 'UNAUTHENTICATED',
        http: { status: 401 },
      },
    });
  }

  return { session };
};
