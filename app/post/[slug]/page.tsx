"use client";
import Post from "@/app/Posts";
import AddComment from "../../AddComment"
import Image from "next/image";
import { useQuery } from "react-query";
import axios from "axios";
import { PostType } from "../../types/Post";
import { motion } from "framer-motion";
import { PostsType } from "@/app/types/Posts";

type URL = {
  params: {
    slug: string;
  };
  searchParams: string;
};
// fetch all posts
const fetchDetails = async (slug: string) => {
  const response = await axios.get(`/api/posts/${slug}`);
  return response.data;
};

export default function PostDetail(url: URL) {
  const { data, isLoading } = useQuery<PostType>({
    queryFn: () => fetchDetails(url.params.slug),
    queryKey: ["detail-post"],
  });

  if (isLoading || !data) return <div>loading...</div>;
  if (!isLoading && data) {
    return (
      <div>
        <Post
          id={data?.id}
          user={data?.user}
          postTitle={data?.title}
          comments={data?.comments}
          createdAt={data.createdAt}
        />
        <AddComment id={data?.id} />
        {/* {data?.comments?.map((comment) => (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ ease: "easeOut" }}
            className="my-6 bg-white p-8 rounded-md"
            key={comment.id}
          >
            <div className="flex items-center gap-2">
              <Image
                width={24}
                height={24}
                src={comment.user?.image}
                alt="avatar"
              />
              <h3 className="font-bold">{comment?.user?.name}</h3>
              <h2 className="text-sm">{comment.createdAt}</h2>
            </div>
            <div className="py-4">{comment.title}</div>
          </motion.div>
        ))} */}
      </div>
    );
  }
}
