import "../style/navigation.scss";
import { NavLink } from "react-router-dom";
import logo from "/logo-small.png";

export const Navigation = () => {
  return (
    <>
      <nav className="navigation">
        <div className="logo-container">
          <NavLink to="/">
            <img src={logo} alt="the zoo logo" width={90} />
          </NavLink>
        </div>
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/">Hem</NavLink>
            </li>
            <li>
              <NavLink to="/about">Om</NavLink>
            </li>
            <li>
              <NavLink to="/animals">
                <div>Våra djur</div>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};