import { Router } from "express";

import User from "../models/User.js";

const settingsRouter = Router();

settingsRouter.get(
    '/:id',
    async (req, res) =>{
        try {
    
            const user = await User.findById(req.params.id);
            return res.json(user)
        } catch (error) {
            res.status(500).json({message: "server side error during get settings data"})
        }
    } 

)
settingsRouter.post(
    '/set/:id',
    async (req, res) =>{
        try {
            const user = await User.findById(req.params.id);
            console.log(req.body)
            await user.update({settings: req.body});
            res.status(200).json({message: "user was modified"});
        } catch (error) {
            res.status(500).json({message: "server side error during get settings data"})
        }
    } 

)

export default settingsRouter