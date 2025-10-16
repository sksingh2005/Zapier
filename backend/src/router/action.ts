import { Router } from "express";
import { prismaclient } from "../db";

const router = Router();

router.get("/", async (req, res) => {
    const actions = await prismaclient.action.findMany({});
    res.json({actions});
});

export const actionRouter = router;