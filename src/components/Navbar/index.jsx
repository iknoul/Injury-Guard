import { NavLink } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <>
      <div className="nav-main">
        <div className="nav-head">
          <h1>INJURY GUARD</h1>
        </div>
        <div className="nav-tail">
          <NavLink className="pages" to="/">
            Home
          </NavLink>
          <NavLink className="pages" to="/predictInjury">
            Predict Injury
          </NavLink>
          <NavLink className="pages" to="/sportsInjuries">
            Sports Injuries
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
