import bcrypt from "bcrypt";
import { AbstractMod } from "./AbstractMod";
import { Todos } from "./Todos";
import { IsEmail, Length } from "class-validator";
import { BeforeInsert, Column, Entity, 
    OneToOne } from "typeorm";

@Entity({name: "users"})
export class Users extends AbstractMod {
    @IsEmail()
    @Column({ unique: true }) email: string;
    @Length(6, 255)
    @Column() password: string;
    @OneToOne(() => Todos) todo: Todos;
    @BeforeInsert()
    async hashPassword(): Promise<void> {
        this.password = await bcrypt.hash(this.password, 12);
    };
};





