import { BaseEntity, CreateDateColumn, ObjectID, 
    ObjectIdColumn, UpdateDateColumn } from "typeorm";

export abstract class AbstractMod extends BaseEntity {
    @ObjectIdColumn() _id: ObjectID;
    @CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updatedAt: Date;
};





