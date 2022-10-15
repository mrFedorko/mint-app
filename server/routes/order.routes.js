import { Router } from "express";

import  Order  from '../models/Order.js'
import { authMW } from "../middleware/auth.middleware.js";

const orderRouter = Router();
orderRouter.post('/create', authMW, async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({message: 'something go wrong during order creation'})
    }
})

orderRouter.get('/', authMW, async (req, res) => {
    try {
        const orders = await Order.find({owner: req.user.userId}) //????
        res.json(orders, {message: 'successfuly get all orders'})
    } catch (error) {
        res.status(500).json({message: 'something go wrong during orders get'})
    }
})

orderRouter.get('/:id', authMW, async (req, res) => {
    try {
        const order = await Order.findById(req.params.id)
        res.json(order, {message: 'successfuly get all orders'})
    } catch (error) {
        res.status(500).json({message: 'something go wrong during order creation'})
    }
})

export default orderRouter;