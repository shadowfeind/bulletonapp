import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import { fetchPosts } from "./postSlice";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

const PostList = () => {
  const { posts, status, error } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, []);

  const orderedPosts = posts
    ?.slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const content = orderedPosts?.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <PostAuthor userId={post.user} />
      <TimeAgo time={post.date} />
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <>
      <h2>Posts</h2>
      {content}
    </>
  );
};

export default PostList;
