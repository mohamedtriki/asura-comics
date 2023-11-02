/* eslint-disable */

import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      id: 'credentials',
      name: 'Asura Scans',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'username@domain.com'
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '********'
        }
      },
      async authorize(credentials, req) {
        const payload = {
          email: credentials.email,
          password: credentials.password
        }

        const res = await fetch(`${process.env.API_URL}auth/login`, {
          method: 'POST',
          body: JSON.stringify(payload),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        const user = await res.json()

        if (!res.ok) {
          throw new Error('Invalid Username & Password combination!');
        }

        if (res.ok && user) {
          return user;
        }

        return null
      }
      }),
    ],
    secret: process.env.JWT_SECRET,
    callbacks: {
      async jwt({ token, user, account }) {
        if (account && user) {
          return {
            ...token,
            username: user.user.username,
            email: user.user.email,
            userid: user.user.id,
            profile_uuid: user.user.profile_uuid
          }
        }

        return token
      },

      async session({ session, token }) {
        session.user.username = token.username,
        session.user.email = token.email,
        session.user.userid = token.userid,
        session.user.profile_uuid = token.profile_uuid

        return session
      },
    },
    jwt: {
      maxAge: 60 * 60 * 24 * 7, // 1 week
    },
    session: {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      strategy: 'jwt',
    },
    theme: {
      colorScheme: 'dark',
      brandColor: '#6f42c1',
      logo: `${process.env.NEXT_PUBLIC_IMG_URL}img/logo-icon.png`
    },
    debug: process.env.NODE_ENV === 'development',
})