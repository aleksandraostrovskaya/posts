'use client';

import { useState } from 'react';
import { Box, TextField, InputAdornment, SpeedDial, SpeedDialAction, Container } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import PostsList from '../features/posts/PostsList';
import Link from 'next/link';

const PostsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Box sx={{ p: 4 }}>
      <Container maxWidth="xl">
        <Box sx={{ mb: 4 }}>
          <TextField
            fullWidth
            placeholder="Пошук за заголовком..."
            variant="outlined"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <PostsList searchTerm={searchTerm} />
      </Container>

      <SpeedDial
        ariaLabel="Додати пост"
        sx={{ position: 'fixed', bottom: 32, right: 32 }}
        icon={<AddIcon />}
      >
        <SpeedDialAction
          icon={<AddIcon />}
          tooltipTitle="Створити пост"
          component={Link}
          href="/posts/create"
        />
      </SpeedDial>
    </Box>
  );
};

export default PostsPage;
