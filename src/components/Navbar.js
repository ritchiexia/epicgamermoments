import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../icons/logo-black.svg";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as GamesIcon } from "../icons/games.svg";
import { ReactComponent as EGM } from "../icons/egm.svg";

const Navbar = () => {
  return (
    <div className="navbar-bg">
      <div className="navbar">
        <span className="nav-logo">
          <EGM style={{ height: "45px", width: "60px" }} />
          <Logo />
        </span>
        <nav>
          <NavLink to="/" activeClassName className="nav-btn">
            <HomeIcon className="nav-icon" />
            <p>HOME</p>
          </NavLink>
          <NavLink to="/games" activeClassName className="nav-btn">
            <GamesIcon className="nav-icon" />
            <p>GAMES</p>
          </NavLink>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
