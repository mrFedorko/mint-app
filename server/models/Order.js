import { Schema, model, Types } from "mongoose";

const orderSchema = new Schema({
    name: {type: String},
    id:{type: String},
    type: {type: String},
    status: {type: String},
    expDate: {type: String},
    layout: {type: Types.ObjectId}
});

const Order = model("Order", orderSchema);



export default Order;
