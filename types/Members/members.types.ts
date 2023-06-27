import { Wing } from '@prisma/client'

export interface members {
  name: string
  roll_number: number
  wing: Wing
}
