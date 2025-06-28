import React, { useState, useMemo } from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider, type PaletteMode } from '@mui/material';
import { ThemeContext, type ThemeContextType } from './themeHooks';
import { moodColorMap } from '../utils/moodColors';
import useLocalStorage from '../hooks/useLocalStorage';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setMode] = useLocalStorage<PaletteMode>('themeMode', 'light');
  const [selectedMoodEmoji, setSelectedMoodEmoji] = useState<string | null>(null);

  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  }, [setMode]);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(selectedMoodEmoji && moodColorMap[selectedMoodEmoji]),
        },
      }),
    [mode, selectedMoodEmoji],
  );

  const contextValue: ThemeContextType = useMemo(
    () => ({ toggleColorMode, mode, setSelectedMoodEmoji }),
    [toggleColorMode, mode, setSelectedMoodEmoji]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeContext.Provider>
  );
};
