import prisma from '@/prisma/utils'
import NextAuth from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'
import { verify } from 'argon2'
import { generateId } from '@/lib/generateId'

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
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    })
  ],
  callbacks: {
    signIn: async ({ user }) => {
      const findUser = await prisma.user.findUnique({
        where: {
          email: user.email ?? undefined
        }
      })

      if (findUser === null) {
        const id = generateId()

        await prisma.user.create({
          data: {
            id,
            email: user.email ?? '',
            name: user.name ?? undefined,
            image: user.image ?? undefined
          }
        })
      }

      return true
    },
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
