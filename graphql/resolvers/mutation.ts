import bcrypt from 'bcryptjs';
import { registerSchema } from 'common/validations';
import { authenticate } from 'graphql/authenticate';
import { Context } from 'graphql/context';
import { MutationResolvers } from 'graphql/generated/resolvers';
import {
  MutationAddBoardArgs,
  MutationChangeBoardVisibilityArgs,
  MutationRegisterArgs,
} from 'graphql/generated/types';

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

const addBoard = async (_parent: unknown, args: MutationAddBoardArgs, context: Context) => {
  const { session } = await authenticate(context);

  const { board } = args;
  const { name, image, visibility, description } = board;

  const newBoard = await context.prisma.board.create({
    data: {
      columns: {
        createMany: {
          data: [
            {
              name: 'BACKLOG',
            },
            {
              name: 'IN_PROGRESS',
            },
            {
              name: 'QA',
            },
            {
              name: 'DONE',
            },
          ],
        },
      },
      description,
      image,
      name,
      owner: {
        connect: {
          id: session.user.id,
        },
      },
      users: {
        connect: {
          id: session.user.id,
        },
      },
      visibility,
    },
    include: {
      columns: true,
      users: true,
    },
  });

  return newBoard;
};

const changeBoardVisibility = async (
  _parent: unknown,
  args: MutationChangeBoardVisibilityArgs,
  context: Context,
) => {
  await authenticate(context);
  const { visbility } = args;

  const board = await context.prisma.board.update({
    data: {
      visibility: visbility.visibility,
    },
    where: {
      id: visbility.id,
    },
  });

  return board;
};
export const mutation: MutationResolvers = { addBoard, changeBoardVisibility, register };
