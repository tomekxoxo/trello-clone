import { PrismaClient } from '@prisma/client';
import type { MicroRequest } from 'apollo-server-micro/dist/types';
import { prisma } from 'database/prisma';
import { ServerResponse } from 'http';
import { Session } from 'next-auth';
import { getSession } from 'next-auth/react';

export type Context = {
  prisma: PrismaClient;
  req: MicroRequest;
  res: ServerResponse;
  session: Session | null;
};

export async function createContext({
  res,
  req,
}: {
  req: MicroRequest;
  res: ServerResponse;
}): Promise<Context> {
  const session = await getSession({ req });

  return { prisma, req, res, session };
}
