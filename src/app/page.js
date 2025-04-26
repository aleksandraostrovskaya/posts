'use client'

import { Button, Card, CardContent, Typography, Stack, useTheme } from '@mui/material';
import { useRouter } from 'next/navigation';
import ListIcon from '@mui/icons-material/List';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const Home = () => {
  const router = useRouter();
  const theme = useTheme();

  const cardBackground = theme.palette.mode === 'dark'
    ? 'linear-gradient(to right, #2c3e50, #8e44ad)'
    : 'linear-gradient(to right, #e0f7fa, #fce4ec)'

  const textColor = theme.palette.mode === 'dark' ? '#fff' : 'inherit';

  return (
    <div style={{ padding: '20px' }}>
      <Card 
        style={{
          maxWidth: '800px',
          margin: '40px auto',
          padding: '30px',
          textAlign: 'center',
          background: cardBackground,
          color: textColor,
          borderRadius: '8px',
        }}
      >
        <CardContent>
          <Typography variant="h3" component="h1" gutterBottom>
            Ласкаво просимо до DOiT MVP
          </Typography>
          <Typography variant="body1" color="inherit" gutterBottom>
            Ми працюємо над MVP освітньої платформи. Приєднуйтесь до команди!
          </Typography>

          <Stack 
            direction="row" 
            spacing={2} 
            justifyContent="center" 
            marginTop={4}
          >
            <Button 
              variant="contained" 
              color="primary" 
              startIcon={<ListIcon />}
              onClick={() => router.push('/posts')}
            >
              Переглянути пости
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => router.push('/posts/create')}
            >
              Додати пост
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
