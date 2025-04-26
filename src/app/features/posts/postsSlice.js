import { createSlice } from '@reduxjs/toolkit';
import {
  fetchPosts,
  fetchPost,
  createPost,
  updatePost,
  deletePost,
} from './postsThunks';

const postsSlice = createSlice({
  name: 'posts',
  initialState: {
    posts: [],
    post: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default postsSlice.reducer;
