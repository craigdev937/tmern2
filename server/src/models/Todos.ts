import { AbstractMod } from "./AbstractMod";
import { Users } from "./Users";
import { Column, Entity, JoinColumn, 
    ManyToOne } from "typeorm";

@Entity({name: "todos"})
export class Todos extends AbstractMod {
    @Column() name: string;
    @Column() description: string;
    @ManyToOne(() => Users, (user) => user.email)
    @JoinColumn({
        name: "email",
        referencedColumnName: "email"
    }) user: Users;
};





