import { useState } from 'react';

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
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '20px auto', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>Daily Vibes</h1>

      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <h2 style={{ color: '#555' }}>How are you feeling today?</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', fontSize: '30px' }}>
          {emojis.map((emoji) => (
            <span
              key={emoji}
              onClick={() => setSelectedMood(emoji)}
              style={{
                cursor: 'pointer',
                padding: '10px',
                borderRadius: '5px',
                backgroundColor: selectedMood === emoji ? '#e0e0e0' : 'transparent',
              }}
            >
              {emoji}
            </span>
          ))}
        </div>
        {selectedMood && (
          <p style={{ marginTop: '10px', fontSize: '20px' }}>You selected: {selectedMood}</p>
        )}
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#555' }}>Optional: Add a note</h2>
        <textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a short note about your mood..."
          rows={4}
          style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px', boxSizing: 'border-box' }}
        ></textarea>
      </div>

      <button
        onClick={handleSubmit}
        disabled={!selectedMood}
        style={{
          display: 'block',
          width: '100%',
          padding: '10px 15px',
          backgroundColor: selectedMood ? '#007bff' : '#cccccc',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          fontSize: '16px',
          cursor: selectedMood ? 'pointer' : 'not-allowed',
        }}
      >
        Submit Mood
      </button>

      <div style={{ marginTop: '30px' }}>
        <h2 style={{ textAlign: 'center', color: '#333' }}>Past Mood Entries</h2>
        {moodEntries.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#777' }}>No entries yet. Submit your first mood!</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {moodEntries.map((entry) => (
              <li key={entry.id} style={{ background: '#f9f9f9', padding: '15px', marginBottom: '10px', borderRadius: '6px', border: '1px solid #eee' }}>
                <p style={{ margin: '0 0 5px 0', fontSize: '18px' }}>
                  <span style={{ marginRight: '10px' }}>{entry.mood}</span>
                  <span style={{ fontSize: '14px', color: '#888' }}>{entry.date}</span>
                </p>
                {entry.note && <p style={{ margin: '0', color: '#666' }}>Note: {entry.note}</p>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
