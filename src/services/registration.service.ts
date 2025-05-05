import { BadRequestException, Injectable } from '@nestjs/common';
import { RegistrationDto } from 'src/dtos/registration.dto';
import { RegistrationRepository, UserRepository } from 'src/repositories';
import { encryptPassword } from 'src/utils/encryption';

@Injectable()
export class RegistrationService {
  constructor(
    private readonly registrationRepository: RegistrationRepository,
    private readonly userRepository: UserRepository,
  ) {}

  async register(dto: RegistrationDto) {
    const user = await this.userRepository.findByEmail(dto.user.email);

    if (user) {
      throw new BadRequestException('User already exists');
    }

    const passwordHash = await encryptPassword(dto.user.password);

    const registration = await this.registrationRepository.register({
      shop: dto.shop,
      user: {
        ...dto.user,
        password: passwordHash,
      },
    });

    return registration;
  }
}
