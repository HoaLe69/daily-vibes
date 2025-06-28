import { useState } from 'react';
import {
  Container,
  Typography,
  Paper,
  Box,
  Button
} from '@mui/material';
import { type MoodEntry } from './types/MoodEntry';
import MoodInput from './components/MoodInput';
import MoodEntriesList from './components/MoodEntriesList';
import { useThemeContext } from './context/themeHooks';

function App() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [note, setNote] = useState<string>('');
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);
  const { toggleColorMode, mode } = useThemeContext();

  const handleSubmit = () => {
    if (selectedMood) {
      const newEntry: MoodEntry = {
        id: Date.now(),
        mood: selectedMood,
        note: note,
        date: new Date().toLocaleDateString(),
      };
      setMoodEntries([...moodEntries, newEntry]);
      setSelectedMood(null);
      setNote('');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Daily Vibes
          </Typography>
          <Button onClick={toggleColorMode} variant="outlined">
            Toggle {mode === 'light' ? 'Dark' : 'Light'} Mode
          </Button>
        </Box>

        <MoodInput
          selectedMood={selectedMood}
          setSelectedMood={setSelectedMood}
          note={note}
          setNote={setNote}
          handleSubmit={handleSubmit}
        />

        <MoodEntriesList moodEntries={moodEntries} />
      </Paper>
    </Container>
  );
}

export default App;
