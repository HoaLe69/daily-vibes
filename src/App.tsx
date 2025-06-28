import { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  IconButton,
  Grid
} from '@mui/material';

interface MoodEntry {
  id: number;
  mood: string;
  note: string;
  date: string;
}

function App() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [note, setNote] = useState<string>('');
  const [moodEntries, setMoodEntries] = useState<MoodEntry[]>([]);

  const emojis = ['😊', '😂', '😍', '😎', '😢', '😡', '😴', '🥳'];

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
        <Typography variant="h4" component="h1" gutterBottom align="center">
          Daily Vibes
        </Typography>

        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography variant="h6" gutterBottom>
            How are you feeling today?
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
            {emojis.map((emoji) => (
              <IconButton
                key={emoji}
                onClick={() => setSelectedMood(emoji)}
                sx={{
                  fontSize: '2rem',
                  p: 1,
                  borderRadius: '8px',
                  bgcolor: selectedMood === emoji ? 'action.selected' : 'transparent',
                  '&:hover': {
                    bgcolor: 'action.hover',
                  },
                }}
              >
                {emoji}
              </IconButton>
            ))}
          </Box>
          {selectedMood && (
            <Typography variant="subtitle1" sx={{ mt: 2 }}>
              You selected: {selectedMood}
            </Typography>
          )}
        </Box>

        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" gutterBottom>
            Optional: Add a note
          </Typography>
          <TextField
            fullWidth
            multiline
            rows={4}
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Write a short note about your mood..."
            variant="outlined"
          />
        </Box>

        <Button
          variant="contained"
          fullWidth
          onClick={handleSubmit}
          disabled={!selectedMood}
          sx={{ mb: 4 }}
        >
          Submit Mood
        </Button>

        <Typography variant="h5" component="h2" gutterBottom align="center">
          Past Mood Entries
        </Typography>
        {moodEntries.length === 0 ? (
          <Typography variant="body1" align="center" color="text.secondary">
            No entries yet. Submit your first mood!
          </Typography>
        ) : (
          <Grid container spacing={2}>
            {moodEntries.map((entry) => (
              <Grid item xs={12} key={entry.id}>
                <Paper variant="outlined" sx={{ p: 2 }}>
                  <Typography variant="body1">{entry.mood} - {entry.date}</Typography>
                  {entry.note && <Typography variant="body2">Note: {entry.note}</Typography>}
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Paper>
    </Container>
  );
}

export default App;
