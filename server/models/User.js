import { Schema, model, Types } from "mongoose";




const userSchema = new Schema({
    
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    // phone: {type: String},
    // organization: organizationSchema, 
    // documents:{type: Types.ArraySubdocument},
    // orders: {type: Types.ArraySubdocument},
    // bonuse: {type: Number},
    // chatMessages: {type: Types.ArraySubdocument},
    // reviews: {type: Types.ArraySubdocument},
    settings: {
        name: {type: String, default: 'Пользователь'},
        adress: {type: String, default: ''},
        phone: {type: String, default: ''},
        entity: {type: String, default: ''},
        entityName: {type: String, default: ''},
        TIN: {type: String, default: ''},
        OGRN: {type: String, default: ''},
        check: {type: String, default: ''},
        corCheck: {type: String, default: ''},
        bank: {type: String, default: ''},
        BIK: {type: String, default: ''}  
    },

    orders: [{type: Types.ObjectId, ref: 'Order'}]
    // notifications: {type: Types.ArraySubdocument},

    // isAuth: {type: Boolean},
    // authToken: {type: String},
    // authTime: {type: Date()}


    
});

const User = model("User", userSchema);



export default User;
