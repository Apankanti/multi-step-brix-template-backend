/* eslint-disable prettier/prettier */
// user.controller.ts

import {
    Controller,
    Post,
    Body,
    UsePipes,
    ValidationPipe,
    HttpCode,
    Put,
    Param,
    NotFoundException,
    Delete,
    Get,
} from '@nestjs/common';
import { UserService } from '../user.service';
import { CreateUserDto } from '../dto/createUser.dto';
import { User } from '../entities/user.entity';

@Controller('users')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post("/create")
    @UsePipes(new ValidationPipe()) // Apply ValidationPipe
    @HttpCode(201)
    async create(@Body() createUserDto: CreateUserDto): Promise<{ message: string; user: User }> {
        const createdUser = await this.userService.create(createUserDto);
        return {
            message: 'User created successfully',
            user: createdUser,
        };
    }

    @Get(":id")
    async getUserById(@Param("id") id: string){
        const user = await this.userService.getUserById(id);
        if (!user) {
            throw new NotFoundException(`User with ID ${id} not found`);
        }
        return user;
    }

    @Get('/getUsers')
    async getAllUsers(){
        const users = await this.userService.getAllUsers();
        return users;
    }
    @Put(':id')
    @HttpCode(200)
    async update(
        @Param('id') id: number,
        @Body() updateUserDto: CreateUserDto
    ): Promise<{ message: string; user: User }> {
        try {
            const updatedUser = await this.userService.update(id, updateUserDto);
            return {
                message: 'User updated successfully',
                user: updatedUser,
            };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException(error.message);
            }
            throw error;
        }
    }

    @Delete(':id')
    async removeUserById(@Param('id') id: number): Promise<{ message: string }> {
        await this.userService.removeUserById(id);
        return {
            message: 'User deleted successfully',
        };
    }

}