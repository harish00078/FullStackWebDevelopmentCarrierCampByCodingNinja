import { createContext } from "react";

import { useProvidePosts } from "../hooks";
const initialState = {
  posts: [],
  loading: true,
  addPostToState:()=>{},
};

export const PostsContext = createContext(initialState);

export const PostsProvider = ({ Children }) => {
  const posts = useProvidePosts();
  return (
    <PostsContext.Provider value={posts}>{Children}</PostsContext.Provider>
  );
};
