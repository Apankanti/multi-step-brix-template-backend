/* eslint-disable prettier/prettier *//* eslint-disable linebreak-style */

import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('usersdata')
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    number: string;

    @Column()
    email: string;

    @Column()
    companyName: string;

    @Column()
    selectedService: string;

    @Column()
    projectBudget: string;

    @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    requested_at: Date;
    
    @Column()
    password?:string;
} 
