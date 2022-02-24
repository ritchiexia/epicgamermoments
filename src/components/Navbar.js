import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../icons/logo-black.svg";
import { ReactComponent as HomeIcon } from "../icons/home.svg";
import { ReactComponent as GamesIcon } from "../icons/games.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
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
  );
};

export default Navbar;
