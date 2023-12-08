/* eslint-disable prettier/prettier *//* eslint-disable linebreak-style */


// import { IsArray, IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto { 
    name: string;
    number: string;
    email: string;
    company: string;
    services:string[];
    budget: string;
}
