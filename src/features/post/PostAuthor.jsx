import React from "react";
import { useSelector } from "react-redux";

const PostAuthor = ({ userId }) => {
  const users = useSelector((state) => state.users);
  const user = users?.find((user) => user.id === userId);
  return (
    <h6>
      author: <strong>{user ? user.name : "unknown user"}</strong>
    </h6>
  );
};

export default PostAuthor;
