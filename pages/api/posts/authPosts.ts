import prisma from "../../../prisma/client";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ message: "pls sign in" });

  if (req.method === "GET") {
    // get auth users posts
    try {
      // find user
      const data = await prisma.user.findUnique({
        where: {
          email: session.user?.email,
        },
        // get all the user's posts
        include: {
          posts: {
            orderBy: {
              createdAt: "desc",
            },
            // include all comments in post
            include: {
              comments: true,
            },
          },
        },
      });
      return res.status(200).json(data);
    } catch (e) {}
  }
}
