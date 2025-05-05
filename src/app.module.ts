import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

import { Resources } from './resources';
import { Repositories } from './repositories';
import { Services } from './services';
import { Controllers } from './controllers';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule.forRoot(),
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: Controllers,
  providers: [...Resources, ...Repositories, ...Services],
})
export class AppModule {}
