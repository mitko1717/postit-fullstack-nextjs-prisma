export type PostsType = {
  title?: string;
  id: string;
  createdAt: string;
  // name?: string;
  // avatar: string;
  postTitle?: string;
  comments?: {
    createdAt: string;
    id: string;
    postId: string;
    userId: string;
  }[];
  user: {
    name: string;
    image: string;
  };
};