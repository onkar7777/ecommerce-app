import { Schema, model } from "mongoose";

const customerSchema = new Schema({
    name: { type: String },
    email: { type: String },
    mobile: { type: Number },
    address: { type: String },
    password: { type: String }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

export const customerModel = model("customers", customerSchema);