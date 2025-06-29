import { type PaletteOptions } from '@mui/material';

interface MoodPaletteColors {
  main: string;
}

interface MoodPalette extends PaletteOptions {
  primary?: MoodPaletteColors;
  secondary?: MoodPaletteColors;
  background?: {
    default?: string;
    paper?: string;
  };
}

export interface MoodColorMap {
  [key: string]: MoodPalette;
}

export const moodColorMap: MoodColorMap = {
  '😊': { primary: { main: '#FFD700' }, secondary: { main: '#FFA500' }, background: { default: '#FFFACD' } }, // Happy - Warm Yellows/Oranges
  '😂': { primary: { main: '#FF6347' }, secondary: { main: '#FF4500' }, background: { default: '#FFDAB9' } }, // Joyful - Bright Reds/Oranges
  '😍': { primary: { main: '#FF69B4' }, secondary: { main: '#FF1493' }, background: { default: '#FFC0CB' } }, // Loving - Pinks
  '😎': { primary: { main: '#9ACD32' }, secondary: { main: '#6B8E23' }, background: { default: '#F0FFF0' } }, // Cool - Greens
  '😢': { primary: { main: '#6495ED' }, secondary: { main: '#4682B4' }, background: { default: '#E0FFFF' } }, // Sad - Blues
  '😡': { primary: { main: '#DC143C' }, secondary: { main: '#B22222' }, background: { default: '#FFB6C1' } }, // Angry - Deep Reds
  '😴': { primary: { main: '#483D8B' }, secondary: { main: '#6A5ACD' }, background: { default: '#E6E6FA' } }, // Sleepy - Purples/Indigo
  '🥳': { primary: { main: '#DA70D6' }, secondary: { main: '#BA55D3' }, background: { default: '#F8F8FF' } }, // Celebratory - Vibrant Pinks/Purples
};
