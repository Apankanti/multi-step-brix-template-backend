/* eslint-disable prettier/prettier *//* eslint-disable linebreak-style */

import { IsEmail, IsNotEmpty,IsNumberString } from 'class-validator';
import { PrimaryGeneratedColumn } from 'typeorm';

export class CreateUserDto {
  @PrimaryGeneratedColumn()
  id:number;
  
  @IsNotEmpty()
  name: string;

  @IsNumberString()
  number: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  companyName: string;

  @IsNotEmpty()
  selectedService: string;

  @IsNotEmpty()
  projectBudget: string;

  password?:string;
  
  requested_at: Date;
}
