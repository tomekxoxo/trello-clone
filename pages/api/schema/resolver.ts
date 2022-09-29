import { PrismaClient } from '@prisma/client';
import { customErrorHandler } from 'Pages/api/customErrorHandler';

const createUser = async (_, args) => {
  const { user } = args;
  const client = new PrismaClient();
  try {
    await client.user.create({
      data: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        password: user.password,
      },
    });
    return 'User created';
  } catch (error) {
    customErrorHandler(error);
  } finally {
    await client.$disconnect();
  }
};

export const resolvers = {
  Mutation: {
    createUser,
  },
  Query: {
    getUsers() {
      return [
        { email: 'tom@test.pl', firstName: 'tomasz', lastName: 'kasprowicz', password: 'haslo' },
      ];
    },
  },
};
