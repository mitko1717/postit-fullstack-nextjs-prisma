"use client";

// import { useMutation, useQueryClient } from "react-query"
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
      <div>
        <textarea
          name="title"
          placeholder="what's on your mind?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></textarea>
      </div>
    </form>
  );
}
