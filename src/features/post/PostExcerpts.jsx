import React from "react";
import ReactionButtons from "./ReactionButtons";
import TimeAgo from "./TimeAgo";
import PostAuthor from "./PostAuthor";

const PostExcerpts = ({ post }) => {
  return (
    <article>
      <h3>{post.title}</h3>
      <p>{post.body.substring(0, 100)}</p>
      <PostAuthor userId={post.userId} />
      <TimeAgo time={post.date} />
      <ReactionButtons post={post} />
    </article>
  );
};

export default PostExcerpts;
