import { useState } from "react";
import "./App.css";
import PostForm from "./features/post/PostForm";
import PostList from "./features/post/PostList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PostForm />
      <PostList />
    </div>
  );
}

export default App;
