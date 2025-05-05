import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from 'src/dtos';
import { LoginService } from 'src/services';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post()
  async login(@Body() dto: LoginDto) {
    const loginResponse = await this.loginService.login(dto);
    return loginResponse;
  }
}
