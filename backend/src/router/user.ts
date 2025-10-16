import { Router } from "express";
import { prismaclient } from "../db";
import { SigninSchema, SignupSchema } from "../types";
import jwt from 'jsonwebtoken'
import { JWT_PASSWORD } from "../config";
import { authMiddleware } from "../middleware";
import bcrypt from 'bcryptjs'; // Added

const router = Router();

router.post('/signup', async (req, res) => {
    const body = req.body;
    const parsedData = SignupSchema.safeParse(body);

    if (!parsedData.success) {
        return res.status(403).json({
            msg: "Invalid username or password"
        })
    }

    const userExists = await prismaclient.user.findFirst({
        where: {
            email: parsedData.data.username
        }
    });

    if (userExists) {
        return res.status(403).json({
            message: "User already exists"
        })
    }

    // Hash the password before storing
    const hashedPassword = await bcrypt.hash(parsedData.data.password, 10);

    const user = await prismaclient.user.create({
        data: {
            email: parsedData.data.username,
            name: parsedData.data.name,
            password: hashedPassword
        }
    })

    res.json({
        user
    })
})

router.post('/signin', async (req, res) => {
    const body = req.body;
    const parsedData = SigninSchema.safeParse(body);

    if (!parsedData.success) {
        return res.status(403).json({
            msg: "Invalid username or password"
        })
    }

    const user = await prismaclient.user.findFirst({
        where: {
            email: parsedData.data.username
        }
    })

    if (!user) {
        return res.status(404).json({
            msg: "User not found"
        })
    }

    // Compare hashed password
    const isPasswordValid = await bcrypt.compare(parsedData.data.password, user.password);
    if (!isPasswordValid) {
        return res.status(403).json({
            msg: "Invalid password"
        })
    }

    const token = jwt.sign({
        id: user.id
    }, JWT_PASSWORD);

    res.json({
        token: token
    })
})

router.get('/', authMiddleware, async (req, res) => {
    const id = req.id;

    const user = await prismaclient.user.findFirst({
        where: {
            id
        },
        select: {
            email: true,
            name: true,
        }
    })

    return res.json({
        user
    })
})

export const userRouter = router;