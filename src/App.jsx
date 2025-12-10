import './App.css';
import { useState } from 'react';
import ChatLog from './components/ChatLog.jsx';
import messages from './data/messages.json';
  
const App = () => {
  const [entries] = useState(messages);
  const localSender = 'Vladimir';

  return (
    <div id="App">
      <header>
        <h1>Chat Between Vladimir and Estragon</h1>
        <h2>0 ❤️s</h2>
      </header>
      <main>
        <ChatLog entries={entries} localSender={localSender}/>
      </main>
    </div>
  );
};

export default App;
