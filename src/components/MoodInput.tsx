import React from 'react';
import {
  Typography,
  TextField,
  Button,
  Box,
  IconButton
} from '@mui/material';

interface MoodInputProps {
  selectedMood: string | null;
  setSelectedMood: (mood: string | null) => void;
  note: string;
  setNote: (note: string) => void;
  handleSubmit: () => void;
}

const MoodInput: React.FC<MoodInputProps> = ({
  selectedMood,
  setSelectedMood,
  note,
  setNote,
  handleSubmit,
}) => {
  const emojis = ['😊', '😂', '😍', '😎', '😢', '😡', '😴', '🥳'];

  return (
    <>
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
    </>
  );
};

export default MoodInput;
