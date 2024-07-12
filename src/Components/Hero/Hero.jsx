import './hero.css';
import mainimg from '../../assets/hero_image.png';
import arrow from '../../assets/arrow.png';
const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIAVALS ONLY</h2>
        <div className="hero-left-1">
          <p>New</p>
          <p>collections</p>
          <p>everyone</p>
        </div>
        <div className="hero-left-2">
          <div>Latest collection</div>
          <img src={arrow} alt="" />
        </div>
      </div>
      <div className="hero-right">
        <img src={mainimg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
