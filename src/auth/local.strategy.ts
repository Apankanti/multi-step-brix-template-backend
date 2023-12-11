/* eslint-disable prettier/prettier *//* eslint-disable linebreak-style */
/* eslint-disable prettier/prettier */
/* eslint-disable linebreak-style */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local"

@Injectable()
export class LocalStraTegy extends PassportStrategy(Strategy){
    constructor(){
        super()
    }

    async validate(username:string, password:string):Promise<any>{
        return "Success"
    }
}