import { useState, useEffect } from 'react';
import { createTheme } from '@mui/material/styles';
import { lightTheme, darkTheme } from '../theme/theme';

export const useThemeMode = () => {
  const [mode, setMode] = useState('light');

  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode') || 'light';
    setMode(savedMode);
  }, []);

  const toggleTheme = () => {
    const newMode = mode === 'light' ? 'dark' : 'light';
    setMode(newMode);
    localStorage.setItem('themeMode', newMode);
  };

  const currentTheme = createTheme(mode === 'light' ? lightTheme : darkTheme);

  return { currentTheme, toggleTheme, mode };
};