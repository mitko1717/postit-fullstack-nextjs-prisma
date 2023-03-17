import prisma from "../../../prisma/client";
import { getServerSession } from "next-auth/next"; // unstable_getServerSession
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

    const title: string = req.body.title

    // get user
    const prismaUser = await prisma.user.findUnique({
        where: { email: session?.user?.email }
    })

    // check title
    if (title.length > 300) return res.status(403).json({ message: "pls write a shorter post" })
    if (!title.length) return res.status(403).json({ message: "pls don't leave it empty" })

    // create post
    try {
        const result = await prisma.post.create({
            data: {
                title,
                userId: prismaUser.id
            }
        })
        res.status(200).json(result)
    } catch (e) {
        res.status(403).json({ e: 'error has occures making a post' })
    }
  }
}
