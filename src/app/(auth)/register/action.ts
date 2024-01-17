'use server'

import prisma from '@/prisma/utils'
import { generateId } from '@/lib/generateId'
import { hash } from 'argon2'

export async function createUser(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  const id = generateId()

  try {
    await prisma.user.create({
      data: {
        id,
        name,
        email,
        password: await hash(password)
      }
    })
  } catch (error) {
    console.error(error)
  }
}
