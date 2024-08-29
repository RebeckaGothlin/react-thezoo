import "../style/home.scss";
import { Link } from "react-router-dom";
import logo from "/logo-big.png";

export const Home = () => {
  return (
    <>
      <div className="home-img">
        <div className="home-info">
          <div className="logo-container">
            <img src={logo} alt="the zoo logo" width={375} />
          </div>
          <Link to="/animals">
            <button>Våra djur</button>
          </Link>
        </div>
      </div>
    </>
  );
};