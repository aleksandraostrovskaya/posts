'use client';

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Link from 'next/link';

import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import AddCircleIcon from '@mui/icons-material/AddCircle';


export default function MyDrawer({ open, onClose }) {
  const pages = [
    { text: 'Головна', href: '/', icon: <HomeIcon /> },
    { text: 'Усі пости', href: '/posts', icon: <ListIcon /> },
    { text: 'Створити пост', href: '/posts/create', icon: <AddCircleIcon /> },
  ];

  return (
    <Drawer
      anchor='left'
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: { width: 250 }
      }}
    >
      <List>
        {pages.map(page => (
          <ListItem key={page.text} disablePadding>
            <ListItemButton component={Link} href={page.href} onClick={onClose}>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={page.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
