import React from 'react';
import {
  Typography,
  Box,
  Paper,
  Grid,
  useTheme
} from '@mui/material';
import { type MoodEntry } from '../types/MoodEntry';

interface MoodEntriesListProps {
  moodEntries: MoodEntry[];
}

const MoodEntriesList: React.FC<MoodEntriesListProps> = ({
  moodEntries
}) => {
  const theme = useTheme();

  return (
    <Box sx={{ mt: 4 }}>
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
              <Paper variant="outlined" sx={{ p: 2, bgcolor: theme.palette.background.paper }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                  <Typography variant="h6">{entry.mood}</Typography>
                  <Typography variant="body2" color="text.secondary">{entry.date}</Typography>
                </Box>
                {entry.note && (
                  <Typography variant="body2" color="text.primary">
                    Note: {entry.note}
                  </Typography>
                )}
              </Paper>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default MoodEntriesList;
