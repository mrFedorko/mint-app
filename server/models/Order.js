import { Schema, model, Types } from 'mongoose';

const orderSchema = new Schema({
    name: {type: String, default: ''},
    type: {type: String, default: ''},
    details:{},
    quan: {type: String, default: ''},
    comment: {type: String, default: ''},
    status: {type: String, default: ''},
    date: {type: String, default: ''},
    expDate: {type: String, default: ''},
    layout: {type: Object},
    docs: {type: Types.ObjectId, ref: 'Document'},
    owner: {type: Types.ObjectId, ref: 'User'},
    delivery: {
        adress: {type: String},
        destination: {type: String},
    },
    
});

const Order = model('Order', orderSchema);



export default Order;
