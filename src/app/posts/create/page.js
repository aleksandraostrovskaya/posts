'use client';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, fetchPosts } from '@/app/features/posts/postsThunks';
import { useRouter } from 'next/navigation';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Divider,
} from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';

const steps = ['Заголовок', 'Тіло', 'Попередній перегляд'];

const CreatePostPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const [activeStep, setActiveStep] = useState(0);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);

  const handleNext = () => {
    if (
      (activeStep === 0 && !title.trim()) ||
      (activeStep === 1 && !body.trim())
    ) {
      return;
    }

    if (activeStep === 1) {
      setOpenDialog(true);
    } else {
      setActiveStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };

  const handleSubmit = async () => {
    try {
      await dispatch(createPost({ title, body })).unwrap();
      dispatch(fetchPosts());
      setOpenSnackbar(true);
      setOpenDialog(false);
      setTimeout(() => {
        router.push('/posts');
      }, 1500);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Container maxWidth='sm'>
        <Box sx={{ mt: 6 }}>

          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === 0 && (
            <TextField
              label='Заголовок'
              fullWidth
              value={title}
              onChange={e => setTitle(e.target.value)}
              margin='normal'
              required
            />
          )}

          {activeStep === 1 && (
            <TextField
              label='Тіло'
              fullWidth
              multiline
              rows={6}
              value={body}
              onChange={e => setBody(e.target.value)}
              margin='normal'
              required
            />
          )}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              variant='outlined'
            >
              Назад
            </Button>
            <Button
              onClick={handleNext}
              variant='contained'
              color='primary'
              startIcon={ <SaveIcon />}
            >
               {activeStep === steps.length - 2 ? 'Зберегти' : 'Далі'}
            </Button>
          </Box>
        </Box>
      </Container>

      <Dialog open={openDialog} fullWidth maxWidth='sm'>
        <DialogTitle>Попередній перегляд</DialogTitle>
        <DialogContent>
          <Divider sx={{ mb: 2 }} />

          <Typography variant='h5' gutterBottom>
            {title || 'Без заголовка'}
          </Typography>

          <Typography variant='body1' sx={{ whiteSpace: 'pre-wrap' }}>
            {body || 'Тут буде текст вашого поста...'}
          </Typography>

          <Divider sx={{ mt: 2 }} />
        </DialogContent>

        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setOpenDialog(false)} variant='text'>
            Редагувати
          </Button>
          <Button onClick={handleSubmit} variant='contained' sx={{ ml: 2 }}>
            Підтвердити
          </Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        open={openSnackbar}
        autoHideDuration={1500}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity='success' sx={{ width: '100%' }}>
          Пост успішно створено!
        </Alert>
      </Snackbar>
    </>
  );
};

export default CreatePostPage;
