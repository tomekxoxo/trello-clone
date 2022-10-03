import bcrypt from 'bcryptjs';
import { signTokenPayload } from 'graphql/auth';
import type { Context } from 'graphql/context';
import type { MutationLoginArgs, MutationRegisterArgs, MutationResolvers } from 'graphql/typesGen';

const register = async (_parent: unknown, args: MutationRegisterArgs, context: Context) => {
  const { user } = args;

  const password = await bcrypt.hash(user.password, 10);

  const createdUser = await context.prisma.user.create({ data: { ...user, password } });

  const token = signTokenPayload(createdUser.id);

  return {
    token,
    user: createdUser,
  };
};

const login = async (_parent: unknown, args: MutationLoginArgs, context: Context) => {
  const { user } = args;

  const foundUser = await context.prisma.user.findUnique({ where: { email: user.email } });
  if (!foundUser) {
    throw new Error('No such user found');
  }

  const valid = await bcrypt.compare(user.password, foundUser.password);
  if (!valid) {
    throw new Error('Invalid password');
  }

  const token = signTokenPayload(foundUser.id);

  return {
    token,
    user: foundUser,
  };
};

export const mutation: MutationResolvers = { login, register };
