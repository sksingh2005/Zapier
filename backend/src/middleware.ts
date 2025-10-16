import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "./config";

declare global {
    namespace Express {
        interface Request {
            id?: number;
        }
    }
}

export function authMiddleware (req: Request, res: Response, next: NextFunction) {
    const authHeader  = req.headers.authorization as unknown as string;
    if (!authHeader) {
    return res.status(403).json({ message: "No token provided" });
    }

    const token = authHeader.split(" ")[1];
    
    try {
        const payload = jwt.verify(token, JWT_PASSWORD);
        if (typeof payload === "object" && payload !== null && "id" in payload) {
            req.id = (payload as jwt.JwtPayload).id as number;
            next();
        } else {
            return res.status(403).json({
                message: "Invalid token payload"
            });
        }
    } catch(e) {
        return res.status(403).json({
            message: "You are not logged in"
        })
    }
}