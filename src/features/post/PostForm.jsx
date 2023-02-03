import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "./postSlice";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user, setUser] = useState("");

  const canSave = user && title.trim() && content.trim();

  const { users } = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const userOptions = users?.map((user) => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const onSavePost = (e) => {
    e.preventDefault();
    if (title.trim() && content.trim()) {
      dispatch(addPost(title, content, user));
      setTitle("");
      setContent("");
    }
  };
  return (
    <>
      <h2>Add Post</h2>
      <form onSubmit={onSavePost}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="content">Content</label>
        <input
          type="text"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <label htmlFor="user">Select User</label>
        <select
          name="user"
          id="user"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        >
          <option></option>
          {userOptions}
        </select>
        <button type="submit" disabled={!canSave}>
          Add
        </button>
      </form>
    </>
  );
};

export default PostForm;
