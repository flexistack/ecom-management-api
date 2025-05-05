import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'resources/prisma/generated';

@Injectable()
export class PrismaDb extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}

export * from 'resources/prisma/generated';
