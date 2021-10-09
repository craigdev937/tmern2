import express from "express";

export const IndexHome: express.RequestHandler =
(req, res) => {
    res.json({ API: "JWT and Bcrypt!" });
};




