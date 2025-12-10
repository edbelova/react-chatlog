import './ChatLog.css';
import ChatEntry from './ChatEntry';

const ChatLog = ({entries, localSender}) => {
  return (
    <section className="chat-log">
      {entries.map((entry) => (
        <ChatEntry
          key={entry.id}
          id={entry.id}
          sender={entry.sender}
          body={entry.body}
          timeStamp={entry.timeStamp}
          localSender={localSender}
        />
      ))}
    </section>
  );
};

export default ChatLog;