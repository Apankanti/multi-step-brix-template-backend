/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto);
  }

  async getUserById(id: string): Promise<User> {
    return this.userRepository.findOneById(id);
  }

  async getAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async update(id: number, updateUserDto: CreateUserDto): Promise<User> {
    const user = await this.userRepository.findOneById(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    const {
      name,
      number,
      email,
      companyName,
      selectedService,
      projectBudget,
      password,
    } = updateUserDto;

    // Update user properties
    user.name = name;
    user.number = number;
    user.email = email;
    user.companyName = companyName;
    user.selectedService = selectedService;
    user.projectBudget = projectBudget;
    user.password = password;

    // Save changes to the database
    return this.userRepository.save(user);
  }
  async removeUserById(id: number): Promise<void> {
    const user = await this.userRepository.findOneById(id);

    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }

    await this.userRepository.remove(user);
  }
}
