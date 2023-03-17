"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query"
import React, { FormEvent, useState } from "react";
// import toast from "react-hot-toast"
import axios, { AxiosError } from "axios"

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  // const queryClient = useQueryClient()
  let toastPostID: string;

  // Create a post
  const { mutate } = useMutation(
    async (title: string) => await axios.post('/api/posts/addPost', { title })
  )

  const submitPost = async (e: FormEvent) => {
    e.preventDefault()
    setIsDisabled(true)
    // call mutate
    mutate(title)
  }

  return (
    <form onSubmit={submitPost} className="bg-gray-700 my-8 p-8 rounded">
      <div className="flex flex-col my-4">
        <textarea
          name="title"
          placeholder="what's on your mind?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="p-4 text-lg rounded-md my-2 bg-gray-200 text-black"
        ></textarea>
      </div>
      <div className=" flex items-center justify-between gap-2">
        <p
          className={`font-bold text-sm ${
            title.length > 300 ? "text-red-700" : "text-gray-700"
          } `}
        >{`${title.length}/300`}</p>
        <button
          disabled={isDisabled}
          className="text-sm bg-teal-600 text-white py-2 px-6 rounded-xl disabled:opacity-25"
          type="submit"
        >
          Create post
        </button>
      </div>
    </form>
  );
}
