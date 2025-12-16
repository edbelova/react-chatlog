import './App.css';
import { useState } from 'react';
import ChatLog from './components/ChatLog.jsx';
import messages from './data/messages.json';
import Header from './components/Header.jsx';

const App = () => {
  const [entries, setEntries] = useState(messages);
  const localSender = 'Vladimir';

  const totalLikes = entries.reduce((total, entry) => {
    return entry.isLiked ? total + 1 : total;
  }, 0);

  const toggleHeart = (entryId) => {
    setEntries(entries => {
      return entries.map(entry => {
        if (entry.id === entryId) {
          return { ...entry, isLiked: !entry.isLiked };
        } else {
          return entry;
        }
      });
    });
  };

  return (
    <div id="App">
      <Header title="Chat between Vladimir and Estragon" totalLikes={totalLikes} />
      <main>
        <ChatLog
          entries={entries}
          localSender={localSender}
          onToggleHeart={toggleHeart} />
      </main>
    </div>
  );
};

export default App;
