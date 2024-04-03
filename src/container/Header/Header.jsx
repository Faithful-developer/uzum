import './Header.scss'
import headerLogo from '../../assets/images/icons/logo-header.png'
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import {HashLink as Link1} from "react-router-hash-link";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
    const location = useLocation();

    const toggleHambuger = () => {
        setMobileMenu(!mobileMenu)
    }
    return (
        <header className="header">
            <div className="container">
                <Link to={'/'} className={'home-logo'}>
                    <img src={headerLogo} alt="header-logo"/>
                </Link>
                <ul className="header-link">
                    <li className={`header-link-item ${location.pathname === '/' ? 'active' : ''}`}>
                        <Link to='/'>
                            Home
                        </Link>
                    </li>
                    <li className={`header-link-item ${location.pathname === '/about-us' ? 'active' : ''}`}>
                        <Link1 smooth to='/#about'>
                            About us
                        </Link1>
                    </li>
                    <li className={`header-link-item ${location.pathname === '/Menu' ? 'active' : ''}`}>
                        <Link to='/menu'>
                            Menu
                        </Link>
                    </li>
                    <li className={`header-link-item ${location.pathname === '/reservation' ? 'active' : ''}`}>
                        <Link to='/reservation'>
                            Reservation
                        </Link>
                    </li>
                    <li className={`header-link-item ${location.pathname === '/gallery' ? 'active' : ''}`}>
                        <Link to='/gallery'>
                            Gallery
                        </Link>
                    </li>
                    <li className={`header-link-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                        <Link to='/contact'>
                            Contact
                        </Link>
                    </li>
                </ul>
                <button className={`burger-button ${mobileMenu ? 'active' : ''}`} onClick={toggleHambuger}>
                    <div className="a"></div>
                    <div className="b"></div>
                    <div className="c"></div>
                </button>
                <div className={`shadow ${mobileMenu ? 'active' : ''}`}/>
                <div className={`mobile-menu ${mobileMenu ? 'active' : ''}`}>
                    <ul className="mobile-menu-list">
                        <li className="mobile-menu-list-item" onClick={toggleHambuger}>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li className="mobile-menu-list-item" onClick={toggleHambuger}>
                            <Link to='/'>
                                About us
                            </Link>
                        </li>
                        <li className="mobile-menu-list-item" onClick={toggleHambuger}>
                            <Link to='/'>
                                Menu
                            </Link>
                        </li>
                        <li className="mobile-menu-list-item" onClick={toggleHambuger}>
                            <Link to='/'>
                                Reservation
                            </Link>
                        </li>
                        <li className="mobile-menu-list-item" onClick={toggleHambuger}>
                            <Link to='/'>
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header
