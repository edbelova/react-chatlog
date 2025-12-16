import './Header.css';
import HeartCounter from './HeartCounter.jsx';
import SenderColorPicker from './SenderColorPicker.jsx';

const Header = ({ title, totalLikes, chooseFontColor }) => {
  return (
    <header>
      <h1>{title}</h1>

      <section>
        <SenderColorPicker senderName="Vladimir" chooseFontColor={chooseFontColor} />
        <HeartCounter totalLikes={totalLikes} />
        <SenderColorPicker senderName="Estragon" chooseFontColor={chooseFontColor} />
      </section>
    </header>
  );
};

export default Header;