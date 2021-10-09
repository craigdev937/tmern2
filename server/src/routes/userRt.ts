import express from "express";
import { Auth } from "../middleware/Auth";
import { FetchAllUsers, Login, Logout, Me, 
    Register } from "../controllers/userCon";

export const userRt: express.Router = express.Router();
    userRt.post("/register", Register);
    userRt.post("/login", Login);
    userRt.get("/me", Auth, Me);
    userRt.get("/logout", Logout);
    userRt.get("/", FetchAllUsers);






