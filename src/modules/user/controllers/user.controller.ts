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



// @Delete(':name')
// async deleteUserByName(@Param('name') name: string): Promise<string> {
//     try {
//         await this.userService.removeByName(name);
//         return `User with name ${name} has been successfully deleted`;
//     } catch (error) {
//         if (error instanceof NotFoundException) {
//             // If the user is not found, return a 404 response
//             throw error;
//         } else {
//             // For other errors, return a generic error message
//             throw new NotFoundException('Error deleting user');
//         }
//     }
// }