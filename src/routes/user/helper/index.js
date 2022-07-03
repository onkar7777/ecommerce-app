import jwt from "jsonwebtoken";



export const jwtTokenGenerate = async (data) => {
   return jwt.sign({
        data:data
    }, 'secret', { expiresIn: '8h' });
}