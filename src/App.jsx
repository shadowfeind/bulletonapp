import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import PostForm from "./features/post/PostForm";
import PostList from "./features/post/PostList";
import { fetchUsers } from "./features/user/userSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="App">
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
