import './ChatEntry.css';
import PropTypes from 'prop-types';
import TimeStamp from './TimeStamp';

const ChatEntry = (props) => {
  const isLocal = props.sender === props.localSender;
  const entryClass = isLocal ? 'local' : 'remote';
  const isLiked = props.isLiked ? '❤️' : '🤍';
  const isLikedButtonClicked = () => {
    props.onToggleHeart(props.id);
  };

  const fontColor = isLocal ? props.fontColorForLocalSender : props.fontColorForRemoteSender;

  return (
    <article className={`chat-entry ${entryClass}`}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p className={`entry-body ${fontColor}`}>{props.body}</p>
        <div className="entry-attributes">
          <p className="entry-time">
            <TimeStamp time={props.timeStamp} />
          </p>
          <button className="like" onClick={isLikedButtonClicked}>{isLiked}</button>
        </div>
      </section>
    </article>
  );
};

export default ChatEntry;

ChatEntry.propTypes = {
  sender: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  timeStamp: PropTypes.string.isRequired,
  localSender: PropTypes.string.isRequired,
  isLiked: PropTypes.bool.isRequired,
  onToggleHeart: PropTypes.func.isRequired,
};