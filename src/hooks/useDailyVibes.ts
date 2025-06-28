import { type MoodEntry } from '../types/MoodEntry';
import useLocalStorage from './useLocalStorage';

export function useDailyVibes() {
  const [moodEntries, setMoodEntries] = useLocalStorage<MoodEntry[]>('dailyVibes', []);

  const addMoodEntry = (newEntry: MoodEntry) => {
    setMoodEntries((prevEntries) => [...prevEntries, newEntry]);
  };

  return { moodEntries, addMoodEntry };
}
