/* eslint-disable linebreak-style *//* eslint-disable prettier/prettier */
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions : DataSourceOptions={
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'Form',
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    // seeds: ['src/seeds/**/*{.ts,.js}'],/
    migrations: ["src/migrations/*.ts"],
    synchronize: true,  //Indicates if database schema should be auto created on every application launch. 
}
export const dataSource = new DataSource(dataSourceOptions);