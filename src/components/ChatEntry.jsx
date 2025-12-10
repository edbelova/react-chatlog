import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = ({sender, body, timeStamp, localSender}) => {
  const isLocal = sender === localSender;
  const entryClass = isLocal ? 'local' : 'remote';

  return (
    <article className={`chat-entry ${entryClass}`}>
      <h2 className="entry-name">{sender}</h2>
      <section className="entry-bubble">
        <p className="entry-body">{body}</p>
        <p className="entry-time">
          <TimeStamp time={timeStamp} />
        </p>
        <button className="button">❤️</button>
      </section>
    </article>
  );
};

export default ChatEntry;
