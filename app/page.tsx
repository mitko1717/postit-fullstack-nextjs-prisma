"use client";
import axios from "axios";
import AddPost from "./AddPost";
import { useQuery } from "@tanstack/react-query";
import Post from "./Posts";
import { PostsType } from "./types/Posts";

// fetch all posts
const allPosts = async () => {
  const res = await axios.get("/api/posts/getPosts");
  return res.data;
};

export default function Home() {
  const { data, error, isLoading } = useQuery<PostsType[]>({
    queryFn: allPosts,
    queryKey: ["posts"], // for caching results
  });

  if (error) return error;
  if (isLoading) return "loading...";

  return (
    <main>
      <AddPost />
      {data?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          name={post.user.name}
          avatar={post.user.image}
          postTitle={post.title}
          comments={post.comments} title={""} user={{
            name: "",
            image: ""
          }}        />
      ))}
    </main>
  );
}
