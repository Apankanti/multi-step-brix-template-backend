/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) { }

    async create(createUserDto: CreateUserDto): Promise<User> {
        // const user = new User();
        // user.name = createUserDto.name;
        // user.number = createUserDto.number;
        // user.name = createUserDto.name;
        // user.name = createUserDto.name;
        // user.name = createUserDto.name;
        // user.name = createUserDto.name;
        return this.userRepository.save(createUserDto);
    }
} 