import { Schema, model } from "mongoose";

const organizationSchema = new Schema({
    name: {type: String},
    inn: {type: String},
    ogrn: {type: String},
    adress: {type: String},
    bik: {type: String},
    bankName: {type: String},
    checkingAccount: {type: String},
    corresponding: {type: String},
    head: {type: String}
});

const Organization = model("Organization", organizationSchema);



export { Organization, organizationSchema}
