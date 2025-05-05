import { Injectable } from '@nestjs/common';
import { PrismaDb } from '../resources';

@Injectable()
export class UserRepository {
  constructor(private readonly prisma: PrismaDb) {}

  async findById(id: string) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }
}
