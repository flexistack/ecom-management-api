import { Injectable } from '@nestjs/common';
import { PrismaDb } from '../resources';
import { RegistrationDto } from 'src/dtos/registration.dto';

@Injectable()
export class RegistrationRepository {
  constructor(private readonly prisma: PrismaDb) {}

  async register(dto: RegistrationDto) {
    const registrationResponse = await this.prisma.$transaction(async (tx) => {
      const shop = await tx.shop.create({
        data: {
          name: dto.shop.name,
          description: dto.shop.description,
        },
      });

      const user = await tx.user.create({
        data: {
          firstName: dto.user.firstName,
          lastName: dto.user.lastName,
          email: dto.user.email,
          passwordHash: dto.user.password,
        },
      });

      await tx.shopUser.create({
        data: {
          shopId: shop.id,
          userId: user.id,
        },
      });

      return {
        user,
        shop,
      };
    });

    return registrationResponse;
  }
}
