import { Router } from "express";
import { authMiddleware } from "../middleware";
import { ZapCreateSchema } from "../types";
import { prismaclient } from "../db";


const router=Router();

router.post('/',authMiddleware,async (req,res)=>{

    const id=req.id;
    const body=req.body;
    const parsedData=ZapCreateSchema.safeParse(body);

    if(!parsedData.success){
        return res.status(411).json({error:'Incorrect inputs'});
    }

    const zapData=parsedData.data;
    

    const zapId = await prismaclient.$transaction(async tx => {
        // Use tx.zap for creation
        if (!id) {
        return res.status(403).json({ message: "Unauthorized" });
        }

        const zap = await tx.zap.create({
            data: {
                userId: id,
                triggerId: "",
                actions: {
                    create: parsedData.data.actions.map((x, index) => ({
                        actionId: x.availableActionId,
                        sortingOrder: index,
                        metadata: x.actionMetadata
                    }))
                }
            }
        });

        // Use tx.trigger for creation
        const trigger = await tx.trigger.create({
            data: {
                triggerId: parsedData.data.availableTriggerId,
                zapId: zap.id,
            }
        });

        // Update zap with triggerId using tx.zap
        await tx.zap.update({
            where: {
                id: zap.id
            },
            data: {
                triggerId: trigger.id
            }
        });

        return zap.id;
    });

    return res.json({ zapId });
});

export default router;
