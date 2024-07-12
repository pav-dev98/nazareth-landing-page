import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const secretKey = 'secreto';

const authAPI = async (req, res) =>{

    if(req.method !== 'POST'){
      return res.status(400).json({message: 'just receive post request'})
    }

    const {email, password} = req.body;
    
    if(!email || !password){
      return res.status(400).json({error: true, message: 'email and password are required'})
    }
    try{
      const user = await prisma.user.findFirst({
        where: {
          email: req.body.email,
          password: req.body.password
        }
      })
      if(user){
        const token = jwt.sign({...user}, secretKey);
        return res.status(200).json({error : false , message:"login succefully",user: user, token: token})
      }
      return res.status(404).json({error: true , message: 'user not found'})
    }
    catch(e){
      return res.status(500).json({error: true, message: 'internal server error'})
    }
}
  export default authAPI