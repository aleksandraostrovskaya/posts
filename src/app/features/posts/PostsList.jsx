'use client';

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPosts, deletePost } from './postsThunks';
import {
  Container,
  Grid,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  CardActions,
  IconButton,
  Skeleton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const PostsList = ({ searchTerm }) => {
  const dispatch = useDispatch();
  const { posts, status, error } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = postId => {
    dispatch(deletePost(postId));
  };

  if (status === 'loading') {
    return (
      <Container maxWidth="xl">
        <Grid container spacing={4} justifyContent="center">
          {[...Array(6)].map((_, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Skeleton variant="rectangular" width={420} height={200} />
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Container maxWidth='xl'>
      <Grid
        container
        sx={{ width: '100%' }}
        spacing={4}
        justifyContent='center'
      >
        {filteredPosts.map(post => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                maxWidth: 420,
              }}
            >
              <CardHeader
                avatar={<Avatar>{post.title[0].toUpperCase()}</Avatar>}
                title={post.title}
                subheader={`ID: ${post.id}`}
                action={
                  <IconButton
                    aria-label='delete'
                    sx={{ color: 'error.main' }}
                    onClick={() => handleDelete(post.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <p>{post.body.slice(0, 100)}...</p>
              </CardContent>
              <CardActions>
                <IconButton
                  component={Link}
                  href={`/posts/${post.id}`}
                  aria-label='перейти до поста'
                >
                  <ArrowForwardIcon />
                </IconButton>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default PostsList;
