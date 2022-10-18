import { Router } from "express";
import uploadMW from "../middleware/upload.middleware.js";


const uploadRouter = Router();

uploadRouter.post('/single', uploadMW.single("layout"),  async (req,res) => {
    try {
        
        await console.log('try')

        res.status(201).json({message: "single file upload successfuly", filename: req.file.filename})
    } catch (error) {
        res.status(500).json({message: "file wasn't upload"})
    }
})

export default uploadRouter