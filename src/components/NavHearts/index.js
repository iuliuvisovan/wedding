import './styles.css';

export default function NavHearts() {
  return (
    <>
      <div className="hearts-gradient"></div>
      <div className="hearts-navigation">
        {new Array(6).fill(null).map((_, index) => (
          <div key={index} className={'heart' + (index === 0 ? ' selected' : '')}>
            <img src="images/hearts.png" />
          </div>
        ))}
      </div>
    </>
  );
}
