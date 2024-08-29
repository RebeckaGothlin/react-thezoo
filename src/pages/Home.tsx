import "../style/home.scss";
import logo from "/logo-big.png";

export const Home = () => {
  return (
    <>
      <div className="home-img">
        <div className="home-info">
          <div className="logo-container">
            <img src={logo} alt="the zoo logo" width={375} />
          </div>
        </div>
      </div>
    </>
  );
};