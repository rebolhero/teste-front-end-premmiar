import "./style.css";
import logo from '../../images/logo.png';
import bagBlack from '../../images/bag-black.png';
import bagWhite from '../../images/bag-white.png';
import linha from '../../images/linhacolorida.png';
import { Link } from 'react-router-dom';



const Header = ()=>{
    return (
            <div className="header">
                <Link to="./" className="logo">
                    <img src={logo} alt="logo"/>
                </Link>
                <Link to="./cart" className="sacola" >
                    <img src={bagWhite} alt="sacola"/>
                    <img src={bagBlack} alt="sacola"/>
                </Link>
            <img src={linha} className="linha" alt="linha"/>
            </div>
    )
}

export default Header;