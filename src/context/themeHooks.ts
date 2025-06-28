import { createContext, useContext } from 'react';
import { type PaletteMode } from '@mui/material';

export interface ThemeContextType {
  toggleColorMode: () => void;
  mode: PaletteMode;
  setSelectedMoodEmoji: (emoji: string | null) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};
