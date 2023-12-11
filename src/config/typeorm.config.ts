/* eslint-disable prettier/prettier *//* eslint-disable linebreak-style */
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'Form',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    migrations: ["src/migrations/*.ts"],
    // synchronize: true,
};
