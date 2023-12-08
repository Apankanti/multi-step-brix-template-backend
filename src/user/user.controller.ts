/* eslint-disable prettier/prettier */
import { Controller, Post, Body, HttpCode } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';
import { User } from './user.entity';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post()
    @HttpCode(201)
    async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.create(createUserDto);
    }
}