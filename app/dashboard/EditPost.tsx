"use client"

import Image from "next/image"
import { useState } from "react"
import Toggle from "./Toggle"
import { useMutation, useQueryClient } from "react-query"
import toast from "react-hot-toast"
import axios from "axios"
import { motion } from "framer-motion"

type EditProps = {
  id: string
  avatar: string
  name: string
  title: string
  createdAt: string
  comments?: {
    id: string
    postId: string
    userId: string
  }[]
}

export default function EditPost({
    avatar,
    name,
    title,
    comments,
    createdAt,
    id
  }: EditProps) {
    const [toggle, setToggle] = useState(false)
    const queryClient = useQueryClient()
    let deleteToastID: string

    const { mutate } = useMutation(
      async (id: string) => await axios.delete('/api/posts/deletePost', { data: id }),
      {
        onError: (e) => {
          console.log(e)
        },
        onSuccess: (data) => {
          console.log(data)          
        }
      }
    )

    const deletePost = () => {
      mutate(id)
    }

    return (
        <>
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ ease: "easeOut" }}
            className="bg-white my-8 p-8 rounded-lg "
          >
            <h4 className="text-gray-700 mb-2 text-xs">{new Date(createdAt).toLocaleString()}</h4>
            <div className="flex items-center gap-2">
              <Image width={32} height={32} src={avatar} alt="avatar" />
              <h3 className="font-bold text-gray-700">{name}</h3>
            </div>
            <div className="my-8 ">
              <p className="break-all text-slate-700">{title}</p>
            </div>
            <div className="flex items-center gap-4 ">
              <p className=" text-sm font-bold text-gray-700">
                {comments?.length} comments
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setToggle(true)
                }}
                className="text-sm font-bold text-red-500"
              >
                delete
              </button>
            </div>
          </motion.div>
          {toggle && <Toggle deletePost={deletePost} setToggle={setToggle} />}
        </>
      )
  }