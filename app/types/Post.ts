export type PostType = {
  id: string;
  title: string;
  updatedAt?: string;
  createdAt: string;
  user: {
    email: string;
    id: string;
    image: string;
    name: string;
  };
  comments?: {
    createdAt: string;
    id: string;
    postId: string;
    userId: string;
    title: string;
    user: {
      email: string;
      id: string;
      image: string;
      name: string;
    };
  }[];
};
