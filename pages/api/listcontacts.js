import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const contactsListApi = async (req, res) => {
    if (req.method === "GET") {
      const listContacts = await prisma.contactUs.findMany();
      return res.status(200).json({ error: true, message: "En los proximos dias estaremos contactandonos con usted",data: listContacts });
    }
    return res.status(400).json({ message: "bad request" });
  };

  export default contactsListApi;