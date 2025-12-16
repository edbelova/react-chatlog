import './SenderColorPicker.css';

const SenderColorPicker = ({ senderName, chooseFontColor }) => {

  const colorButtonClicked = (color) => {
    chooseFontColor(senderName, color);
  };

  return (
    <div className="widget sender-color-picker">
      <h3 className="senderLabel">{senderName}'s color:</h3>
      <span className={senderName.toLowerCase()}>
        <button onClick={() => colorButtonClicked('red')}>🔴</button>
        <button onClick={() => colorButtonClicked('orange')}>🟠</button>
        <button onClick={() => colorButtonClicked('yellow')}>🟡</button>
        <button onClick={() => colorButtonClicked('green')}>🟢</button>
        <button onClick={() => colorButtonClicked('blue')}>🔵</button>
        <button onClick={() => colorButtonClicked('purple')}>🟣</button>
        <button onClick={() => colorButtonClicked('black')}>⚫</button>
      </span>
    </div>
  );
};

export default SenderColorPicker;