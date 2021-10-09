import express from "express";
import { IndexHome } from "../controllers/userCon";

export const userRt: express.Router = express.Router();
    userRt.get("/", IndexHome);






