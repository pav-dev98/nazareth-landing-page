
import prisma from '../../../libs/prisma';

const contactusApi = async (req, res) => {
  console.log("contactus api",req.method)
  switch (req.method) {
    case "GET":{
      console.log("get api")
      try {
        const contacts = await prisma.contactUs.findMany();
        return res.status(200).json({ data: contacts });
      
      }
      catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
      }}
    case "POST":{
      const { name, email, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ error: "Missing fields" });
      }
      try{
        const newContact = await prisma.contactUs.create({
          data: {
            fullName: name,
            email,
            message,
          },
        })
        return res.status(201).json({ message: "En los proximos dias estaremos contactandonos con usted",data: newContact });
      }
      catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
      }}
    default:{
        console.log("default")
      return res.status(400).json({ error:true,message: "bad request" });
    }
  }
}

export default contactusApi;
