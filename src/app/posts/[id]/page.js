'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
	CircularProgress,
	Box,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import { deletePost, fetchPost } from '@/app/features/posts/postsThunks';

const PostPage = () => {
  const { id } = useParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const { post, status, error } = useSelector(state => state.posts);

  useEffect(() => {
    if (id) {
      dispatch(fetchPost(id));
    }
  }, [dispatch, id]);

  const handleBack = () => {
    router.push('/posts');
  };

  const handleDelete = async () => {
      try {
        await dispatch(deletePost(id)).unwrap();
        router.push('/posts');
      } catch (err) {
        console.error('Помилка при видаленні поста:', err);
      }
  };

  if (status === 'loading') {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant='h6' color='error'>
          Помилка: {error}
        </Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Card sx={{ maxWidth: 800, margin: '0 auto' }}>
        <CardHeader
          avatar={<Avatar>{post.title[0].toUpperCase()}</Avatar>}
          title={post.title}
          subheader={`ID: ${post.id}`}
        />
        <CardContent>
          <Typography variant='body1'>{post.body}</Typography>
        </CardContent>

        <CardActions sx={{ paddingX: 2, paddingBottom: 2 }}>
          <Button variant='contained' color='error' onClick={handleDelete}>
            <DeleteIcon sx={{ mr: 1 }} />
            Видалити
          </Button>
          <Button variant='outlined' onClick={handleBack}>
            <ArrowBackIcon sx={{ mr: 1 }} />
            До списку
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
};

export default PostPage;
