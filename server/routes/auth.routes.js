import { Router } from "express";
import bcrypt from 'bcryptjs'
import { check, validationResult} from 'express-validator';
import jwt from 'jsonwebtoken';
import config from 'config';

import User from '../models/User.js'

const router = Router();

//////////REGISTER ROUTE

router.post(
    '/register',
    [
        check('email', 'wrong email').isEmail(),
        check('password', 'min length').isLength({min:6, max:20})
    ],
    async (req, res) => {
        try {
            ///// validation
            const errs = validationResult(req);
            if(!errs.isEmpty()){
                return res.status(400).json({
                    errs: errs.array(),
                    message: "input data not valid"
                })
            }
            /////get data and find same
            const {email, password, name} = await req.body;
            const candidate = await User.findOne({email});
            if (candidate) {
                return res.status(400).json({message: "user with such email has already existed"})
            }

            const hashedPassword = await bcrypt.hash(password, 7)
            const user = new User({email, settings: {name}, password: hashedPassword})

            await user.save();
            return res.status(201).json({message: "user was successfuly created"});

        } catch (error) {
            res.status(500).json({message: "server side error during registration"})
        }
    }
)

router.post(
    '/login',
    [
        check('email', 'wrong email').isEmail(),
        check('password', 'min length').exists()
    ],
    async (req, res) => {
        try {
            ///// validation
            const errs = validationResult(req);
            if(!errs.isEmpty()){
                return res.status(400).json({
                    errs: errs.array(),
                    message: "input data not valid"
                })
            }
            /////get data and find same
            const {email, password} = await req.body;
            const user = await User.findOne({email});
           
            if (!user) {
                return res.status(400).json({message: "user with such email has not existed"})
            }
            
            const isPassword = await bcrypt.compare(password, user.password)
            
            if (user && isPassword){
                console.log('match')
                const token = jwt.sign(
                    {userId: user.id},
                    config.get('jwtSecret'),
                    {expiresIn: '1h'}
                )
                const settings = user.settings

                res.json({token, userId: user.id, settings})
               
            } else {
                return res.status(400).json({message: "wrong data during login"})
            }


        } catch (error) {
            res.status(500).json({message: "server side error during login"})
        }
    }
)


export default router;