import './HeartCounter.css';

const HeartCounter = ({ totalLikes }) => {
  return (
    <div className="widget" id="heartWidget">
      {totalLikes} ❤️s
    </div>
  );
};

export default HeartCounter;
