import './Footer.scss'
import {Link} from "react-router-dom";
import instagram from '../../assets/images/icons/instagram.svg'
import telegram from '../../assets/images/icons/telegram.svg'
import map from '../../assets/images/icons/map.svg'
import {HashLink as Link1} from "react-router-hash-link";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {t} = useTranslation()
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <ul className="footer-link-left">
                        <li className="footer-link-left-item">
                            <Link to='/'>
                                {t("header.0")}
                            </Link>
                        </li>
                        <li className="footer-link-left-item">
                            <Link1 smooth to='/#about'>
                                {t("header.1")}
                            </Link1>
                        </li>
                        <li className="footer-link-left-item">
                            <Link to='/'>
                                {t("header.2")}
                            </Link>
                        </li>
                        <li className="footer-link-left-item">
                            <Link to='/'>
                                {t("header.3")}
                            </Link>
                        </li>
                        <li className="footer-link-left-item">
                            <Link to='/'>
                                {t("header.4")}
                            </Link>
                        </li>
                    </ul>
                    <ul className="footer-link-right">
                        <li className="footer-link-right-item">
                            <Link to='/'>
                                <img src={instagram} alt=""/>
                            </Link>
                        </li>
                        <li className="footer-link-right-item">
                            <Link to='/'>
                                <img src={telegram} alt=""/>
                            </Link>
                        </li>
                        <li className="footer-link-right-item">
                            <Link to='/'>
                                <img src={map} alt=""/>
                            </Link>
                        </li>
                    </ul>
                </div>
            </footer>
        </>
    )
}

export default Footer
