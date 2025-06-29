import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { type MoodEntry } from '../types/MoodEntry';
import { Box, Typography, Paper, useTheme } from '@mui/material';
import { moodColorMap } from '../utils/moodColors';

interface MoodCalendarProps {
  moodEntries: MoodEntry[];
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const MoodCalendar: React.FC<MoodCalendarProps> = ({ moodEntries }) => {
  const [value, onChange] = useState<Value>(new Date());
  const theme = useTheme();

  const getTileContent = ({ date, view }: { date: Date; view: string }) => {
    if (view === 'month') {
      const formattedDate = date.toLocaleDateString();
      const entryForDay = moodEntries.find(entry => entry.date === formattedDate);

      if (entryForDay) {
        const moodColor = moodColorMap[entryForDay.mood]?.primary?.main || theme.palette.primary.main;
        return (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
              bgcolor: moodColor,
              borderRadius: '50%',
              opacity: 0.7,
            }}
          >
            <Typography variant="caption" sx={{ color: theme.palette.getContrastText(moodColor) }}>
              {entryForDay.mood}
            </Typography>
          </Box>
        );
      }
    }
    return null;
  };

  return (
    <Paper elevation={3} sx={{ p: 2, mt: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom align="center">
        Mood Calendar
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Calendar
          onChange={onChange}
          value={value}
          tileContent={getTileContent}
        />
      </Box>
    </Paper>
  );
};

export default MoodCalendar;
