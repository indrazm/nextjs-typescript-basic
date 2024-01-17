import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdefghizklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 18)

export const generateId = (): string => `${process.env.IDENTIFIER_PREFIX}_${nanoid()}`
