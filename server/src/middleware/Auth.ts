import jwt from "jsonwebtoken";
import express from "express";
import { config } from "../config/keys";
import { Users } from "../models/Users";

export const Auth: express.RequestHandler =
async (req, res, next) => {
    try {
        const token: string = req.cookies.token;
        if (!token) throw new Error("Unauthorized");
        const { email }: any = jwt.verify(token, config.JWT_SECRET);
        const user: Users | undefined = await Users.findOne({ email });
        if (!user) throw new Error("Unauthorized");
        res.locals.user = user;
        return next();
    } catch (error) {
        console.log(error);
        res.status(401).json({error: "Unauthorized!"});
    }
};




