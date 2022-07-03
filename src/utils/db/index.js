import mongoose from "mongoose";
import { config } from "../config";
const { dburl } = config;

export const connectDb = async () => {
    try {
        mongoose.connect(dburl);
        console.log("db is connected successfull !")
    } catch (error) {
        console.log('db is not connected !');
    }
}