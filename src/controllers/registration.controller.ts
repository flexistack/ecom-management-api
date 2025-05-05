import { Body, Controller, Post } from '@nestjs/common';
import { RegistrationDto } from 'src/dtos/registration.dto';
import { RegistrationService } from 'src/services';

@Controller('register')
export class RegistrationController {
  constructor(private readonly registrationService: RegistrationService) {}

  @Post()
  async register(@Body() dto: RegistrationDto) {
    return this.registrationService.register(dto);
  }
}
