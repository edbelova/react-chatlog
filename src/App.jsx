import './App.css';
import { useState } from 'react';
import ChatLog from './components/ChatLog.jsx';
import messages from './data/messages.json';
import Header from './components/Header.jsx';

const App = () => {
  const [entries, setEntries] = useState(messages);
  const [fontColorForLocalSender, setFontColorForLocalSender] = useState('black');
  const [fontColorForRemoteSender, setFontColorForRemoteSender] = useState('black');
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

  const chooseFontColor = (senderName, color) => {
    if (senderName === localSender) {
      setFontColorForLocalSender(color);
    } else {
      setFontColorForRemoteSender(color);
    }
  };

  return (
    <div id="App">
      <Header
        totalLikes={totalLikes}
        chooseFontColor={chooseFontColor}
      />
      <main>
        <ChatLog
          entries={entries}
          localSender={localSender}
          onToggleHeart={toggleHeart}
          fontColorForLocalSender={fontColorForLocalSender}
          fontColorForRemoteSender={fontColorForRemoteSender}
        />
      </main>
    </div>
  );
};

export default App;
