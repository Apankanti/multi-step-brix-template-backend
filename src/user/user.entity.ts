/* eslint-disable prettier/prettier *//* eslint-disable linebreak-style */

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users')
export class User{

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    number: string;

    @Column()
    email: string;

    @Column()
    company: string;

    @Column('text', { array: true })
    services: string[];

    @Column()
    budget: string;
} 