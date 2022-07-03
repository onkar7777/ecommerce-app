import { customerModel } from "../../../model/customer";
import bcrypt from "bcrypt";
import { jwtTokenGenerate } from "../helper";
export const userCreate = async (req, res) => {
    try {
        const {
            name, email, mobile, address, password
        } = req.body;
        const data = {
            name, email, mobile, address, password: await bcrypt.hash(password, 10)
        }
        const userChecker = await customerModel.find({ email });
        if (userChecker.length >= 1) {
            res.status(200).json({
                message: "flag2",
                status: 200,
            });
        } else {
            await customerModel.create(data);
            res.status(200).json({
                message: "flag1",
                status: 200,
            });
        }
    } catch (error) {
        res.status(200).json({
            message: "flag0",
            status: 500
        });
    }
}

export const userSignIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        const userChecker = await customerModel.find({ email });
        if(userChecker.length >= 1){
            const { password: dbPassword, name, mobile } = userChecker[0];
            const matchPassword = await bcrypt.compare(password, dbPassword);
            if(matchPassword){
                res.status(200).json({
                    message: "flag2",
                    status: 200,
                    token : await jwtTokenGenerate({ name, email, mobile })
                });
            }else{
                res.status(200).json({
                    message: "flag3",
                    status: 200
                });
            }
        }else{
            res.status(200).json({
                message: "flag1",
                status: 404
            });
        }

    } catch (error) {
        res.status(200).json({
            message: "flag0",
            status: 500
        });
    }
}