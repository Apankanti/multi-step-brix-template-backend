/* eslint-disable prettier/prettier *//* eslint-disable linebreak-style */


// import { IsArray, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
    name: string;
    number: string;
    email: string;
    companyName: string;
    selectedService: string;
    projectBudget: string;
    requested_at: Date;
}
