import prisma from "../../../prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    // fetch all posts
    try {
      // getting all posts
      const data = await prisma.post.findMany({
        include: {
          user: true,
          comments: true
        },
        orderBy: {
          createdAt: "desc", // descending order
        },
      });
      res.status(200).json(data);
    } catch (e) {
      res.status(403).json({ e: "error has occured fetching a post" });
    }
  }
}
