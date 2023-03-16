"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState } from "react";
// import toast from "react-hot-toast"
// import axios, { AxiosError } from "axios"

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  // const queryClient = useQueryClient()
  let toastPostID: string;

  // Create a post

  return (
    <form>
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
