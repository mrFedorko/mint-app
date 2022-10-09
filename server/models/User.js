import { Schema, model, Types } from "mongoose";




const userSchema = new Schema({
    name: {type: String},
    email:{type: String, required: true, unique: true},
    password:{type: String, required: true},
    // phone: {type: String},
    // organization:{type: Types.Subdocument, ref: organization.name},
    // documents:{type: Types.ArraySubdocument},
    // orders: {type: Types.ArraySubdocument},
    // bonuse: {type: Number},
    // chatMessages: {type: Types.ArraySubdocument},
    // reviews: {type: Types.ArraySubdocument},
    // settings: {type: Types.Subdocument},
    // notifications: {type: Types.ArraySubdocument},

    // isAuth: {type: Boolean},
    // authToken: {type: String},
    // authTime: {type: Date()}


    
});

const User = model("User", userSchema);



export default User;
