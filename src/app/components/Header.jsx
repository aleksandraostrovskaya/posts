'use client';

import { useState } from 'react';
import MyAppBar from './AppBar';
import MyDrawer from './Drawer';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <MyAppBar onMenuClick={handleDrawerOpen} />
      <MyDrawer open={drawerOpen} onClose={handleDrawerClose} />
    </>
  );
}
