import './Header.css';
import HeartCounter from './HeartCounter.jsx';
import SenderColorPicker from './SenderColorPicker.jsx';

const Header = ({ title, totalLikes }) => {
  return (
    <header>
      <h1>{title}</h1>

      <section>
        <SenderColorPicker senderName="Vladimir" />
        <HeartCounter totalLikes={totalLikes} />
        <SenderColorPicker senderName="Estragon" />
      </section>
    </header>
  );
};

export default Header;