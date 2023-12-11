/* eslint-disable prettier/prettier *//* eslint-disable linebreak-style */
// auth.service.ts
import { Injectable } from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(private jwtService: JwtService) { }

    async login(user:any): Promise<any> {
        // Your user validation logic goes her
        return {
            token: this.jwtService.sign({
                user:user , sub:1
            })
        }
    }
}
