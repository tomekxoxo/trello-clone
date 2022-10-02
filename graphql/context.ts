import { PrismaClient } from '@prisma/client';
import { prisma } from 'database/prisma';

export type Context = {
  prisma: PrismaClient;
};

export const createContext = async ({ req }): Promise<Context> => ({
  ...req,
  prisma,
});
