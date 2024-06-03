import db from "../../libs/db";

const contactsApi = async (req, res) => {
  if (req.method === "POST") {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing fields" });
    }
    const data = await db.contactus.create({
      data:{
        name,
        email,
        message,
      }  
    });
    return res.status(201).json({ message: "En los proximos dias estaremos contactandonos con usted",data: data });
  }
  return res.status(200).json({ message: "This is a contacts API route" });
};

export default contactsApi;
