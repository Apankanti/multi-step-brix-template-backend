/* eslint-disable prettier/prettier */
// user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './controllers/user.controller';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { UserRepository } from './repository/user.repository';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';

@Module({
    imports: [TypeOrmModule.forFeature([User]), AuthModule],
    controllers: [UserController],
    providers: [UserService, UserRepository, AuthService],
})
export class UserModule { }
