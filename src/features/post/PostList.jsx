import React from "react";
import { useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";

const PostList = () => {
  const posts = useSelector((state) => state.posts);

  const orderedPosts = posts
    ?.slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const content = orderedPosts?.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
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
