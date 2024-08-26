import './styles.css';

// map of transforms, which then applied to images:
const transforms = {
  1: 'scale(1.1)',
};

export default function LandingPage() {
  return (
    <div className="screen-landing-page">
      <div className="backdrop"></div>
      <div className="title">
        <div className="name-word">Iuliu</div>
        <div className="and-symbol">&</div>
        <div className="name-word">Gabriela</div>
      </div>
      <div className="images-wrapper">
        {new Array(30).fill(null).map((_, index) => (
          <img key={index} src={`images/landing/image${index + 1}.jpeg`} alt={`image${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
