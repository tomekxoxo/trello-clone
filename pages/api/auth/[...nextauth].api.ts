import { PrismaAdapter } from '@next-auth/prisma-adapter';
import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { prisma } from '../../../database/prisma';

const clientId = process.env.GOOGLE_CLIENT_ID as string;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET as string;

const cookiesPolicy =
  process.env.NODE_ENV === 'development'
    ? {
        sessionToken: {
          name: `_Secure_next-auth.session-token`,
          options: {
            httpOnly: true,
            path: '/',
            sameSite: 'None',
            secure: true,
          },
        },
      }
    : {};

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  cookies: cookiesPolicy,
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
    CredentialsProvider({
      async authorize(credentials: {
        email: string;
        password: string;
        firstName: string;
        lastName: string;
      }) {
        const { email, password, firstName, lastName } = credentials;
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (!user) {
          throw new Error('No user found');
        }

        return user;
      },
      type: 'credentials',
    }),
  ],
  session: {
    strategy: 'jwt',
  },
};

export default NextAuth(authOptions);
