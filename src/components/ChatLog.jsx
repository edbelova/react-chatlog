import './ChatLog.css';
import ChatEntry from './ChatEntry';
import PropTypes from 'prop-types';

const ChatLog = ({entries, localSender, onToggleHeart}) => {
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
          isLiked={entry.isLiked}
          onToggleHeart={onToggleHeart}
        />
      ))}
    </section>
  );
};

export default ChatLog;

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      sender: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      timeStamp: PropTypes.string.isRequired,
    })
  ).isRequired,
  localSender: PropTypes.string.isRequired,
  onToggleHeart: PropTypes.func.isRequired,
};