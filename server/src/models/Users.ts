import bcrypt from "bcrypt";
import { AbstractMod } from "./AbstractMod";
import { IsEmail, Length } from "class-validator";
import { BeforeInsert, Column, Entity } from "typeorm";

@Entity({name: "users"})
export class Users extends AbstractMod {
    @IsEmail()
    @Column({ unique: true }) email: string;

    @Length(6, 255)
    @Column() password: string;

    @BeforeInsert()
    async hashPassword(): Promise<void> {
        this.password = await bcrypt.hash(this.password, 12);
    };
};





