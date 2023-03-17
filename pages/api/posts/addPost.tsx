import prisma from "../../../prisma/client"
import { getServerSession, unstable_getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    if (req.method === 'POST') {
        const session = await getServerSession(req, res, authOptions)
        if (!session) return res.status(401).json({ message: 'pls sign in to make a post' })

        console.log(req.body)
    }
}