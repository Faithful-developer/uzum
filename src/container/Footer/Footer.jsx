import './Footer.scss'
import {Link} from "react-router-dom";
import instagram from '../../assets/images/icons/instagram.svg'
import telegram from '../../assets/images/icons/telegram.svg'
import map from '../../assets/images/icons/map.svg'

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <ul className="footer-link-left">
                        <li className="footer-link-left-item">
                            <Link to='/'>
                                Home
                            </Link>
                        </li>
                        <li className="footer-link-left-item">
                            <Link to='/'>
                                About uss
                            </Link>
                        </li>
                        <li className="footer-link-left-item">
                            <Link to='/'>
                                Menu
                            </Link>
                        </li>
                        <li className="footer-link-left-item">
                            <Link to='/'>
                                Reservation
                            </Link>
                        </li>
                        <li className="footer-link-left-item">
                            <Link to='/'>
                                Gallery
                            </Link>
                        </li>
                        <li className="footer-link-left-item">
                            <Link to='/'>
                                Contact
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
