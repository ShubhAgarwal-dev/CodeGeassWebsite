import { Role } from '@prisma/client'
import { members } from './members.types'

export interface GD {
  member: members
  role: Role
}
