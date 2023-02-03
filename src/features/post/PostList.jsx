import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostExcerpts from "./PostExcerpts";

import { fetchPosts } from "./postSlice";

const PostList = () => {
  const { posts, status, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  let content =
    status === "loading" ? (
      <h2>Loading... </h2>
    ) : status === "succeeded" ? (
      posts
        ?.slice(0, 100)
        .sort((a, b) => b.date.localeCompare(a.date))
        .map((post) => <PostExcerpts key={post.id} post={post} />)
    ) : status === "failed" ? (
      <h2>{error}</h2>
    ) : (
      <div></div>
    );

  return (
    <>
      <h2>Posts</h2>
      {content}
    </>
  );
};

export default PostList;
