/* eslint-disable @typescript-eslint/no-unused-vars *//* eslint-disable prettier/prettier *//* eslint-disable linebreak-style */
// jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
// import { AuthService } from './auth.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'test',
        });
    }

    async validate(username: string, password: string): Promise<any> {
        // Your user validation logic goes here
        return "Successfully logged in";
    }
}
