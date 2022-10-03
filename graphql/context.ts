import { PrismaClient } from '@prisma/client';
import type { MicroRequest } from 'apollo-server-micro/dist/types';
import { prisma } from 'database/prisma';

export type Context = {
  prisma: PrismaClient;
  req: MicroRequest;
};

export const createContext = async ({ req }: { req: MicroRequest }): Promise<Context> => ({
  prisma,
  req,
});
