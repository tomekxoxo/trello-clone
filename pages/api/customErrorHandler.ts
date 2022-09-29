import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import { UserInputError } from 'apollo-server-micro';

export const customErrorHandler = (error: unknown) => {
  if (error instanceof PrismaClientKnownRequestError) {
    if (error.code === 'P2002') {
      throw new UserInputError('This email is already in use. Please use another email address.');
    }
  }
  throw error;
};
