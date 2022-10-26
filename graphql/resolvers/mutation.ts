import bcrypt from 'bcryptjs';
import { registerSchema } from 'common/validations';
import type { Context } from 'graphql/context';
import { MutationRegisterArgs, MutationResolvers } from 'graphql/typesGen';

const register = async (_parent: unknown, args: MutationRegisterArgs, context: Context) => {
  const { credentials } = args;
  const { email, password, name } = credentials;

  await registerSchema.validate({ email, name, password });

  const foundUser = await context.prisma.user.findFirst({
    where: {
      AND: [
        {
          email,
        },
        {
          origin: 'LOCAL',
        },
      ],
    },
  });

  if (foundUser) throw new Error('User already exists');

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = await context.prisma.user.create({
    data: {
      email,
      name,
      origin: 'LOCAL',
      password: hashedPassword,
    },
  });

  return user;
};

export const mutation: MutationResolvers = { register };
