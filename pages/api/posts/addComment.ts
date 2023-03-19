import prisma from "../../../prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const session = await getServerSession(req, res, authOptions);
    if (!session)
      return res.status(401).json({ message: "pls sign in to make a post" });

    // get user
    const prismaUser = await prisma.user.findUnique({
        where: { email: session.user?.email }
    })

    // add a comment
    try {
      const { title, postId } = req.body.data
      
      if (!title.length) {
        return res.status(401).json({ message: "pls enter something"});
      }

      const result = await prisma.comment.create({
        data: {
            title,
            userId: prismaUser?.id,
            postId
        }
      })

      res.status(200).json(result)
    } catch (e) {
      res.status(403).json({ e: "error has occured making a post" });
    }
  }
}
