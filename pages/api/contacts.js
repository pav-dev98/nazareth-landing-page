import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const contactsApi = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }
    const newContact = await prisma.contactUs.create({
      data: {
        fullName: name,
        email,
        message,
      },
    })
    return res.status(201).json({ message: "En los proximos dias estaremos contactandonos con usted",data: newContact });
  }
  return res.status(200).json({ message: "This is a contacts API route" });
};

export default contactsApi;
