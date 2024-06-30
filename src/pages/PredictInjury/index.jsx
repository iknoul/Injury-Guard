import Navbar from '../../components/Navbar';
import './predictInjury.css';

const PredictInjury = () => {
  return (
    <div className="piMain">
      <Navbar />
      <div className="pi-second">
        <img src="pi-img1.png" alt="" />
        <h1>Football Injury Prediction</h1>
      </div>
      <div className="pi-third">
        <form action="" className="pi-third-injury-form">
          <h3>
            Height (cm) : <input type="number" min="1" required />
          </h3>
          <h3>
            Weight (kg) : <input type="number" min="1" required />
          </h3>

          <div className="radio-button">
            <h3>Work Rate (numeric) : </h3>
            <input type="radio" name="work_rate" value="1" required />
            <label for="1">Very Low</label>
            <input type="radio" name="work_rate" value="2" />
            <label for="2">Low</label>
            <input type="radio" name="work_rate" value="3" />
            <label for="3">Average</label>
            <input type="radio" name="work_rate" value="4" />
            <label for="4">High</label>
            <input type="radio" name="work_rate" value="5" />
            <label for="5">Very High</label>
          </div>
          <h3>
            Pace : <input type="number" min="10" max="100" required />
          </h3>
          <h3>
            Physic : <input type="text" required />
          </h3>
          <div className="radio-button">
            <h3>Position : </h3>
            <input type="radio" name="position" value="1" required />
            <label for="1">Goal keeper</label>
            <input type="radio" name="position" value="2" />
            <label for="2">Defender</label>
            <input type="radio" name="position" value="3" />
            <label for="3">Middlefeild</label>
            <input type="radio" name="position" value="4" />
            <label for="4">Forward</label>
          </div>
          <h3>
            Age : <input type="number" required />
          </h3>
          <h3>
            Cumulative Minutes Played : <input type="number" required />
          </h3>
          <h3>
            Minutes per Game in previous Seasons :{' '}
            <input type="number" max="100" required />
          </h3>
          <h3>
            Average Days Injured in previous Seasons :{' '}
            <input type="number" required />
          </h3>
          <div className="radio-button">
            <h3>Significant Injury in previous Seasons :</h3>
            <input type="radio" name="injury" value="1" required />
            <label for="1">YES</label>
            <input type="radio" name="injury" value="0" />
            <label for="0">NO</label>
          </div>
          <h3>
            Cumulative Days Injured : <input type="number" required />
          </h3>
          <button className="okButton">Predict Injury </button>
        </form>
      </div>
    </div>
  );
};

export default PredictInjury;
