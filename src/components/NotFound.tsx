import { Link, NavLink } from "react-router-dom"
import "../style/notfound.scss";
import logo from "/logo-small.png";

export const NotFound = () => {
    return <>
              <NavLink to="/">
            <img src={logo} alt="the zoo logo" width={90} />
          </NavLink>
    <div>
        <img src="./../pagenotfound.png" alt="Error, page not found" style={{width: '300px' }}/>
    </div>
    <p>Sidan kan inte hittas.</p>
    <Link to={"/"} className="back-a">Gå tillbaka till startsidan</Link>
    </>
}