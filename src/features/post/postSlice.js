import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns/esm";

const initialState = [
  {
    id: "1",
    title: "Something new",
    content: "This is the end",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: "2",
    title: "Redux ToolKit",
    content: "Hold your breath and count to 10",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title, content, user) => {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            user,
            date: new Date().toISOString(),
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    addReaction: (state, action) => {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const { addPost, addReaction } = postSlice.actions;
export default postSlice.reducer;
