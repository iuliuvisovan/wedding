import './styles.css';
import { ReactComponent as HeartIcon } from './heart.svg';

export default function NavHearts() {
  return (
    <>
      {/* <div className="hearts-gradient"></div> */}
      <div className="hearts-navigation">
        {new Array(5).fill(null).map((_, index) => (
          <div key={index} className={'heart' + (index === 0 ? ' selected' : '')}>
            <HeartIcon />
          </div>
        ))}
      </div>
    </>
  );
}
