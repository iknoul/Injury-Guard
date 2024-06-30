import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import './home.css';

const Home = () => {
  return (
    <div className="main-container">
      <div className="hMain">
        <Navbar />
        <img src="home-main.jpg" className="hMain-img" />
        <h1 className="hMain-img-head">Sports Injury Prediction</h1>
        <p className="hMain-img-head">
          Explore our comprehensive sports injury database to predict your
          injury and recover quickly. Get back to full fitness in no time with
          our expert resources
        </p>
        <Link to="/predictInjury" className="hMain-img-tail">
          predict now
        </Link>
      </div>
      <div className="hSecond">
        <p className="hSecond-head">Sports Injuries by Location</p>
        <p className="hSecond-head">Click where it hurts:</p>
        <div className="hSecond-tail">
          <img src="home-img2.png" className="hSecond-img" />
        </div>
      </div>
      <div className="hThird">
        <div className="hThird-head">
          <h1>Sports Injury Treatment</h1>
        </div>
        <div className="hThird-tail">
          <div className="hThird-card">
            <img className="hThird-card-img" src="first-aid-img.png" alt="" />
            <h3>First Aid</h3>
            <p>---------------------------</p>
            <p>
              Emergency first aid for most soft tissue sports injuries is to
              apply the PRICE principles of protection, rest, ice, compression &
              elevation.
            </p>
          </div>
          <div className="hThird-card">
            <img
              className="hThird-card-img"
              src="sports-taping-img.png"
              alt=""
            />
            <h3>Sports Taping</h3>
            <p>---------------------------</p>
            <p>
              Sports taping is used in the prevention, treatment, and
              rehabilitation of sports injuries. View our easy-to-follow videos
              on how to apply sports taping techniques.
            </p>
          </div>
          <div className="hThird-card">
            <img
              className="hThird-card-img"
              src="sports-massage-img.png"
              alt=""
            />
            <h3>Sports Massage</h3>
            <p>---------------------------</p>
            <p>
              Sports massage has many benefits for preventing and treating
              sports injuries. We have video demonstrations on sports massage
              techniques for a number of common injuries.
            </p>
          </div>
        </div>
      </div>
      <div className="hFourth">
        <div className="hFourth-head">
          <h2>Sports Injury Prevention</h2>
        </div>
        <div className="hFourth-tail">
          <div className="hFourth-card">
            <img className="hFourth-card-img" src="hFourth-img1.png" alt="" />
            <h3>Is Kinesiology Taping Effective</h3>
            <p>
              Kinesiology taping is the colourful tape you might see on
              athletes, sportsmen and women who…
            </p>
          </div>
          <div className="hFourth-card">
            <img className="hFourth-card-img" src="hFourth-img2.png" alt="" />
            <h3>Myth busting Chronic Low back pain</h3>
            <p>
              Here we bust four myths or commonly held beliefs about persistent
              or chronic low back…
            </p>
          </div>
          <div className="hFourth-card">
            <img className="hFourth-card-img" src="hFourth-img3.png" alt="" />
            <h3>Are Footballers More At Risk Of Depression?</h3>
            <p>
              Are Footballers More At Risk Of Depression, anxiety and suicide?
              Do professional footballers have a…
            </p>
          </div>
        </div>
        <div className="hFourth-tail-end">
          <h4>About Us</h4>
        </div>
      </div>
      <div className="footer">
        <div className="footer1">
          <p>____________________________________________________</p>
          <i className="fa-brands fa-facebook"></i>&nbsp;
          <i class="fa-brands fa-youtube"></i>&nbsp;
          <i class="fa-brands fa-twitter"></i>&nbsp;
          <i class="fa-brands fa-pinterest"></i>&nbsp;
          <i class="fa-brands fa-square-instagram"></i>&nbsp;
        </div>
        <div className="footer2">
          <p>Who are we?</p>
          <p>Feedback</p>
          <p>Cookies & Privacy Policy</p>
          <p>Disclaimer</p>
          <p>Contact Us</p>
        </div>
        <div className="footer3">
          <p>Terms & Conditions </p>
          <p>Acceptable Use Policy </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
