import { Link } from "react-router-dom"

export const NotFound = () => {
    return <>
    <div>
        <img src="./../pagenotfound.png" alt="Error, page not found" className="notfound"  style={{width: '300px' }}/>
    </div>
    <p>Sidan kan inte hittas.</p>
    <Link to={"/"} style={{color: '#e2c5be', textDecoration: 'underline'}}>Gå tillbaka till startsidan</Link>
    </>
}