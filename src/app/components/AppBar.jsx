'use client';

import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useThemeMode } from '../context/ThemeModeContext';
import MenuIcon from '@mui/icons-material/Menu';
import { useParams, usePathname } from 'next/navigation'

export default function MyAppBar({ onMenuClick }) {
  const { mode, toggleTheme } = useThemeMode();

  const pathname = usePathname();
  const params = useParams();

  let title = 'Пости';

  if (pathname === '/posts') {
    title = 'Усі пости';
  } else if (pathname === '/posts/create') {
    title = 'Створити пост';
  } else if (pathname.startsWith('/posts/') && params.id) {
    title = `Пост #${params.id}`;
  } else if (pathname === '/') {
    title = ' DOiT MVP'
  }

  return (
    <AppBar position='static'>
      <Toolbar>
        <IconButton
          edge='start'
          color='inherit'
          aria-label='menu'
          onClick={onMenuClick}
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant='h6' sx={{ flexGrow: 1 }}>
        {title}
        </Typography>
        <IconButton color='inherit' onClick={toggleTheme}>
          {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
