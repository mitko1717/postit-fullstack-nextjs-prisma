"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PostsType } from "./types/Posts";

export default function Post({
  id,
  postTitle,
  comments,
  user,
  createdAt
}: PostsType) {
  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      initial={{ opacity: 0, scale: 0.8 }}
      transition={{ ease: "easeOut" }}
      className="bg-white my-8 p-8 rounded-lg "
    >
      <h4 className="text-gray-700 mb-2 text-xs">{new Date(createdAt).toLocaleString()}</h4>
      <div className="flex items-center gap-2">
        <Image
          className="rounded-full"
          width={32}
          height={32}
          src={user.image}
          alt="avatar"
        />
        <h3 className="font-bold text-gray-700">{user.name}</h3>
      </div>
      <div className="my-8 ">
        <p className="break-all text-slate-700">{postTitle}</p>
      </div>
      <div className="flex gap-4 cursor-pointer items-center">
        <Link
          href={{
            pathname: `/post/${id}`,
          }}
        >
          <p className=" text-sm font-bold text-gray-700">
            {comments?.length} Comments
          </p>
        </Link>
      </div>
    </motion.div>
  );
}
