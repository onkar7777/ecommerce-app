import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import morgan from "morgan";
const app = express();
import userRouter from "./src/routes/user";
import { connectDb } from "./src/utils/db";

connectDb();
//secl0Mr9TYKMZpYm
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(morgan('dev'));


app.use('/user', userRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
})


