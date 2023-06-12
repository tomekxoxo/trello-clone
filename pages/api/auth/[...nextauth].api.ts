import { PrismaAdapter } from '@next-auth/prisma-adapter';
import bcrypt from 'bcryptjs';
import { loginSchema } from 'common/validations';
import NextAuth from 'next-auth';
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';

import { prisma } from '../../../database/prisma';

const clientId = process.env.GOOGLE_CLIENT_ID as string;
const clientSecret = process.env.GOOGLE_CLIENT_SECRET as string;
const authSecret = process.env.NEXTAUTH_SECRET as string;

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
  callbacks: {
    session: async ({ session, token }) => {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  cookies: cookiesPolicy,
  providers: [
    GoogleProvider({
      clientId,
      clientSecret,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        if (credentials === undefined) return null;
        const { email, password } = credentials;

        const foundUser = await prisma.user.findFirst({
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

        if (foundUser && foundUser.password) {
          await loginSchema.validate({ email, password });
          const isPasswordValid = await bcrypt.compare(password, foundUser.password);
          if (!isPasswordValid) throw new Error('Invalid password');
          return foundUser;
        }

        throw new Error('User not found');
      },
      credentials: {
        email: {
          type: 'email',
        },
        password: { type: 'password' },
      },
      type: 'credentials',
    }),
  ],
  secret: authSecret,
  session: {
    strategy: 'jwt',
  },
};

export default NextAuth(authOptions);
