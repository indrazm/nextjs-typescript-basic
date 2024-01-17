import prisma from '@/prisma/utils'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import GitHub from 'next-auth/providers/github'
import { verify } from 'argon2'

export const {
  handlers: { GET, POST },
  auth
} = NextAuth({
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text', placeholder: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        const { email, password } = credentials

        const findUser = await prisma.user.findUnique({
          where: {
            email: email as string
          }
        })

        if (findUser === null) return null

        await verify(findUser.password as string, password as string)

        return {
          id: findUser.id,
          name: findUser.name,
          email: findUser.email,
          image: findUser.image
        }
      }
    }),
    GitHub
  ],
  callbacks: {
    signIn: async () => true,
    session: async ({ session }) => {
      const findUser = await prisma.user.findUnique({
        where: {
          email: session.user?.email ?? undefined
        },
        select: {
          id: true
        }
      })

      if (findUser === null) return session

      const user = session.user as { id: string }
      user.id = findUser.id

      return session
    }
  }
})
