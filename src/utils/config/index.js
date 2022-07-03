import dotenv from "dotenv";
dotenv.config();

export const config = {
    dburl:process.env.MONGODB_URL
}