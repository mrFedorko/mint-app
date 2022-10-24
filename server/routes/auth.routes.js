import { Router } from 'express';
import bcrypt from 'bcryptjs';
import { check, validationResult} from 'express-validator';
import jwt from 'jsonwebtoken';
import config from 'config';

import User from '../models/User.js';

const router = Router();

//////////REGISTER ROUTE

router.post(
    '/register',
    [
        check('email', 'wrong email').isEmail(),
        check('password', 'min length').isLength({min:6, max:20}),
    ],
    async (req, res) => {
        try {
            ///// validation
            const errs = validationResult(req);
            if(!errs.isEmpty()){
                return res.status(400).json({
                    errs: errs.array(),
                    message: 'input data not valid',
                    clientMsg: 'Некорректные данные',
                });
            }
            /////get data and find same
            const {email, password, name} = await req.body;
            const candidate = await User.findOne({email});
            if (candidate) {
                return res.status(400).json({message: 'user with such email has already existed', clientMsg: 'Пользователь с таким email уже существует'});
            }

            const hashedPassword = await bcrypt.hash(password, 7);
            const user = new User({email, settings: {name}, password: hashedPassword});

            await user.save();
            return res.status(201).json({message: 'user was successfuly created', clientMsg: 'Пользователь успешно создан'});

        } catch (error) {
            res.status(500).json({message: 'server side error during registration', clientMsg: 'Ошибка сервера, обратитесь в поддержку'});
        }
    }
);

router.post(
    '/login',
    [
        check('email', 'wrong email').isEmail(),
        check('password', 'min length').exists(),
    ],
    async (req, res) => {
        try {
            ///// validation
            const errs = validationResult(req);
            if(!errs.isEmpty()){
                return res.status(400).json({
                    errs: errs.array(),
                    message: 'input data not valid',
                    clientMsg: 'Некорректные данные',
                });
            }
            /////get data and find same
            const {email, password} = await req.body;
            const user = await User.findOne({email});
           
            if (!user) {
                return res.status(400).json({message: 'user with such email has not existed', clientMsg: 'Пользователь с таким email не найден'});
            }
            
            const isPassword = await bcrypt.compare(password, user.password);
            
            if (user && isPassword){
                const token = jwt.sign(
                    {userId: user.id},
                    config.get('jwtSecret'),
                    {expiresIn: '1h'}
                );
                const settings = user.settings;

                res.json({token, userId: user.id, settings, message: 'success', clientMsg: 'Вход выполнен'});
               
            } else {
                return res.status(400).json({message: 'wrong data during login', clientMsg: 'Не верные данные при авторизации'});
            }


        } catch (error) {
            res.status(500).json({message: 'server side error during login', clientMsg: 'Ошибка сервера, обратитесь в поддержку'});
        }
    }
);


export default router;