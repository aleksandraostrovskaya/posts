'use client';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeModeProvider, useThemeMode } from '../context/ThemeModeContext';
import { store } from '../store/store';
import { lightTheme, darkTheme } from '../theme/theme';


export default function Providers({ children }) {
  return (
    <ThemeModeProvider>
      <InnerProviders>{children}</InnerProviders>
    </ThemeModeProvider>
  );
}

function InnerProviders({ children }) {
  const { mode } = useThemeMode();

  const theme = mode === 'light' ? lightTheme : darkTheme;

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </Provider>
  );
}
