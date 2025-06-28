import { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button,
  useTheme
} from '@mui/material';
import { type MoodEntry } from './types/MoodEntry';
import MoodInput from './components/MoodInput';
import MoodEntriesList from './components/MoodEntriesList';
import { useThemeContext } from './context/themeHooks';
import { useDailyVibes } from './hooks/useDailyVibes';

function App() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [note, setNote] = useState<string>('');
  const { moodEntries, addMoodEntry } = useDailyVibes();
  const { toggleColorMode, mode, setSelectedMoodEmoji } = useThemeContext();
  const theme = useTheme();

  const handleSubmit = () => {
    if (selectedMood) {
      const newEntry: MoodEntry = {
        id: Date.now(),
        mood: selectedMood,
        note: note,
        date: new Date().toLocaleDateString(),
      };
      addMoodEntry(newEntry);
      setSelectedMood(null);
      setNote('');
      setSelectedMoodEmoji(null); // Reset mood color after submission
    }
  };

  return (
    <Container maxWidth="md">
      <Paper square sx={{ height: '100%', width: '100%', bgcolor: theme.palette.background.default, borderRadius: 0, boxShadow: 'none' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', p: 2, mb: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Daily Vibes
          </Typography>
          <Button onClick={toggleColorMode} variant="outlined">
            Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </Box>

        <Box sx={{ p: 2 }}>
          <MoodInput
            selectedMood={selectedMood}
            setSelectedMood={(mood) => {
              setSelectedMood(mood);
              setSelectedMoodEmoji(mood);
            }}
            note={note}
            setNote={setNote}
            handleSubmit={handleSubmit}
          />
        </Box>

        <Box sx={{ p: 2 }}>
          <MoodEntriesList moodEntries={moodEntries} />
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
