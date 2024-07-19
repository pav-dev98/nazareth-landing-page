import prisma from "../../../libs/prisma";
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
  console.log("contactus query api", req.method);
  const { id } = req.query;
  
  if (!ObjectId.isValid(id)) {
    return res.status(400).json({ error: true, message: "Invalid id" });
  }
  let objectId;
  try {
    console.log("entrando al try");
    objectId = ObjectId.createFromHexString(id);
    console.log("objectId", objectId);
  } catch (error) {
    console.error("Malformed ObjectID", error);
    return res.status(400).json({ error: true, message: "Malformed ObjectID" });
  }
  
  switch (req.method) {
    case "GET": {
      try {
        const contactUsFinded = await prisma.contactUs.findUnique({
          where: { id:objectId },
        });
        
        if (!contactUsFinded) {
          return res
            .status(404)
            .json({ error: true, message: "Contact not found" });
        }
        return res.status(200).json({ error: false, data: contactUsFinded });
      } catch (error) {
        return res
          .status(500)
          .json({ error: true, message: "Internal Server Error" });
      }
    }

    case "DELETE":
      try {
        const deletedContactus = await prisma.contactUs.delete({
          where: {
            id: objectId,
          },
        });
        return res
          .status(200)
          .json({
            error: false,
            message: "Contact deleted",
            data: deletedContactus,
          });
      } catch (error) {
        if (error.code === 'P2025') {
            return res.status(404).json({ error: true, message: 'Contact not found' });
          } else {
            return res.status(500).json({ error: true, message: "Internal Server Error", er: error });
          }
      }
    case "PUT":
      const { name: newName, email: newEmail, message: newMessage } = req.body;
      if (!id || (!newName && !newEmail && !newMessage)) {
        return res.status(400).json({ error: true, message: "Missing fields" });
      }
      try {
        const updatedContact = await prisma.contactUs.update({
          where: {
            id: id,
          },
          data: {
            ...(newName && { fullName: newName }),
            ...(newEmail && { email: newEmail }),
            ...(newMessage && { message: newMessage }),
          },
        });
        return res
          .status(200)
          .json({
            error: false,
            message: "Contact updated",
            data: updatedContact,
          });
      } catch (error) {
        return res
          .status(500)
          .json({ error: true, message: "Internal Server Error" });
      }
    default:
      return res.status(400).json({ error: true, message: "bad request" });
  }
}
