
import express from "express";
import { Webhook } from "svix";
import UserModel from "../models/user.model.ts";

export const clerkWebHook = (req: express.Request, res: express.Response) => {

    const WEBHOOKS_SECRET = process.env.CLERK_WEBHOOKS_SECRET;

    if (!WEBHOOKS_SECRET) throw new Error("Webhooks secret needed")

    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOKS_SECRET);
    let evt: any
    try {
        evt = wh.verify(payload, headers as Record<string, string>);
    } catch (err) {
        res.status(400).json({
            message : "Webhook verification failed"
        });
    }

    // if (evt.type  === "user.created") {
        
    //     const newUser = new UserModel({
    //         clerkUserId : evt.data.id
    //     })
    // }

    console.log(evt.data)

    // Do something with the message...

    res.json({});

}