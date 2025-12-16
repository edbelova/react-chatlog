import './SenderColorPicker.css';

const SenderColorPicker = ({ senderName }) => {
  return (
    <div className="widget sender-color-picker">
      <h3 className="senderLabel">{senderName}'s color:</h3>
      <span className={senderName.toLowerCase()}>
        <button>🔴</button>
        <button>🟠</button>
        <button>🟡</button>
        <button>🟢</button>
        <button>🔵</button>
        <button>🟣</button>
      </span>
    </div>
  );
};

export default SenderColorPicker;