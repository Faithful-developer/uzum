import './Header.scss'
import headerLogo from '../../assets/images/icons/logo-header.png'
import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import {HashLink as Link1} from "react-router-hash-link";
import {useTranslation} from "react-i18next";

const Header = () => {
    const { t, i18n } = useTranslation();

    const [mobileMenu, setMobileMenu] = useState(false);
    const location = useLocation();

    const toggleHambuger = () => {
        setMobileMenu(!mobileMenu)
    }

    const HandleLanguage =(lang)=>{
        i18n.changeLanguage(lang)
        toggleHambuger()
    }

    const currentLanguage = i18n.language

    return (
        <header className="header">
            <div className="container">
                <Link to={'/'} className={'home-logo'}>
                    <img src={headerLogo} alt="header-logo"/>
                </Link>
                <ul className="header-link">
                    <li className={`header-link-item ${location.pathname === '/' ? 'active' : ''}`}>
                        <Link to='/'>
                            {t("header.0")}
                        </Link>
                    </li>
                    <li className={`header-link-item ${location.pathname === '/about-us' ? 'active' : ''}`}>
                        <Link1 smooth to='/#about'>
                            {t("header.1")}
                        </Link1>
                    </li>
                    <li className={`header-link-item ${location.pathname === '/Menu' ? 'active' : ''}`}>
                        <Link to='/menu'>
                            {t("header.2")}
                        </Link>
                    </li>
                    <li className={`header-link-item ${location.pathname === '/reservation' ? 'active' : ''}`}>
                        <Link to='/reservation'>
                            {t("header.3")}
                        </Link>
                    </li>
                    <li className={`header-link-item ${location.pathname === '/contact' ? 'active' : ''}`}>
                        <Link to='/contact'>
                            {t("header.4")}
                        </Link>
                    </li>
                    <li className="header-link-item language">
                        <select name="language" id="language" onChange={(e) => HandleLanguage(e.target.value)}>
                            <option value="en" selected={currentLanguage === "en"}>
                                English
                            </option>
                            <option value="ru" selected={currentLanguage === "ru"}>
                                Russian
                            </option>
                            <option value="uzb" selected={currentLanguage === "uzb"}>
                                Uzbek
                            </option>
                        </select>
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
                                {t("header.0")}
                            </Link>
                        </li>
                        <li className="mobile-menu-list-item" onClick={toggleHambuger}>
                            <Link1 smooth to='/#about'>
                                {t("header.1")}
                            </Link1>
                        </li>
                        <li className="mobile-menu-list-item" onClick={toggleHambuger}>
                            <Link to='/menu'>
                                {t("header.2")}
                            </Link>
                        </li>
                        <li className="mobile-menu-list-item" onClick={toggleHambuger}>
                            <Link to='/reservation'>
                                {t("header.3")}
                            </Link>
                        </li>
                        <li className="mobile-menu-list-item" onClick={toggleHambuger}>
                            <Link to='/contact'>
                                {t("header.4")}
                            </Link>
                        </li>
                        <li className="mobile-menu-list-item">
                            <select name="language" id="language" onChange={(e) => HandleLanguage(e.target.value)}>
                                <option value="en" selected={currentLanguage === "en"}>
                                    English
                                </option>
                                <option value="ru" selected={currentLanguage === "ru"} >
                                    Russian
                                </option>
                                <option value="uzb" selected={currentLanguage === "uzb"}>
                                    Uzbek
                                </option>
                            </select>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
export default Header
