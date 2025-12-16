import { useState } from 'react';
import './Header.css';
import HeartCounter from './HeartCounter.jsx';
import SenderColorPicker from './SenderColorPicker.jsx';

const Header = ({ totalLikes, chooseFontColor }) => {
  const [localColor, setLocalColor] = useState('white');
  const [remoteColor, setRemoteColor] = useState('white');

  const changeFontColor = (senderName, color) => {
    if (senderName === 'Vladimir') {
      setLocalColor(color);
    } else {
      setRemoteColor(color);
    }
    chooseFontColor(senderName, color);
  };

  return (
    <header>
      <h1>
        Chat between <span className={localColor}>Vladimir</span> and <span className={remoteColor}>Estragon</span>
      </h1>

      <section>
        <SenderColorPicker senderName="Vladimir" chooseFontColor={changeFontColor} />
        <HeartCounter totalLikes={totalLikes} />
        <SenderColorPicker senderName="Estragon" chooseFontColor={changeFontColor} />
      </section>
    </header>
  );
};

export default Header;