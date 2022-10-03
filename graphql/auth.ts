import { AuthenticationError } from 'apollo-server-micro';
import type { MicroRequest } from 'apollo-server-micro/dist/types';
import jwt from 'jsonwebtoken';

export const JWT_SECRET = process.env.JWT_SECRET as string;

function getTokenPayload(token: string) {
  return jwt.verify(token, JWT_SECRET, error => {
    if (error) {
      throw new AuthenticationError('Token expired, please login again');
    }
  });
}

export function signTokenPayload(userId: string) {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
}

export function authenticate(req: MicroRequest) {
  if (req) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = authHeader.replace('Bearer ', '');
      if (!token) {
        throw new AuthenticationError('No token found');
      }
      return getTokenPayload(token);
    }
  }

  throw new AuthenticationError('Not authenticated');
}
