import JWT from 'jsonwebtoken';
export const getToken = async  (userId)=>{
 try {
    const token = JWT.sign({userId}, process.env.JWT_SECRET , {expiresIn : "7d"})
    console.log(token)
    return token;
 } catch (error) {
     console.log(error);
 }
}