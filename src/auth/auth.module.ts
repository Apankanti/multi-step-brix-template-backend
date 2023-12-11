/* eslint-disable prettier/prettier *//* eslint-disable linebreak-style */
// auth.module.ts
import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStraTegy } from './local.strategy';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: 'test',
            signOptions: { expiresIn: '1h' },
        }),
    ],
    providers: [AuthService, JwtStrategy, LocalStraTegy],
    exports: [AuthService, PassportModule, JwtModule],
})
export class AuthModule {}
