import './Header.scss'
import headerLogo from '../../assets/images/icons/logo-header.png'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <Link to={'/'} className={'home-logo'}>
                    <img src={headerLogo} alt="header-logo"/>
                </Link>
                <ul className="header-link">
                    <li className="header-link-item">
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className="header-link-item">
                        <Link to='/about-us'>
                            About us
                        </Link>
                    </li>
                    <li className="header-link-item">
                        <Link to='/menu'>
                            Menu
                        </Link>
                    </li>
                    <li className="header-link-item">
                        <Link to='/reservation'>
                            Reservation
                        </Link>
                    </li>
                    <li className="header-link-item">
                        <Link to='/gallery'>
                            Gallery
                        </Link>
                    </li>
                    <li className="header-link-item">
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}
export default Header
