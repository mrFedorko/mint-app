import { Schema, model, Types } from "mongoose";

const orderSchema = new Schema({
    id:{type: String},
    name: {type: String},
    type: {type: String},
    quan: {type: String},
    comment: {type: String},
    status: {type: String},
    fromDate: {type: String},
    expDate: {type: String},
    layout: {type: Types.ObjectId},
    docs: {type: Types.ObjectId, ref: 'Document'},
    owner: {type: Types.ObjectId, ref: 'User'}
});

const Order = model("Order", orderSchema);



export default Order;
