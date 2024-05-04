import './HomePage.scss'
import {Link} from "react-router-dom";
import Beshbarmak from '../../assets/images/beshmarmoq.png'
import Manti from '../../assets/images/manti.png'
import Tandir from '../../assets/images/tandir.png'
import info1 from '../../assets/images/info-1.png'
import info2 from '../../assets/images/info-2.png'
import adv from '../../assets/images/adv-logo.png'
import Footer from "../../container/Footer";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

const HomePage = () => {

    const {t} = useTranslation()

    return (
        <>
            <Helmet>
                <title>Uzum uz | {t("header.title")}</title>
            </Helmet>
            <section className="home-intro">
            </section>
            <section className="food-type">
                <div className="container">
                    <h1 className='food-type-title'>Our Most Popular Foods</h1>
                    <ul className="food-type-list">
                        <li className="food-type-list-item">
                            <Link to='/'>
                                <img src={Beshbarmak} alt=""/>
                                <span className="name">
                                    {t("food-type.0")}
                                </span>
                            </Link>
                        </li>
                        <li className="food-type-list-item">
                            <Link to='/'>
                                <img src={Manti} alt=""/>
                                <span className="name">
                                     {t("food-type.1")}
                                </span>
                            </Link>
                        </li>
                        <li className="food-type-list-item">
                            <Link to='/'>
                                <img src={Tandir} alt=""/>
                                <span className="name">
                                    {t("food-type.2")}
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="btn-container">
                        <button className="order-btn">
                            {t("order-btn")}
                        </button>
                    </div>
                </div>
            </section>
            <section className="info" id='about'>
                <div className="container">
                    <div className="info-list">
                        <div className="info-list-left">
                            <img src={info1} alt=""/>
                        </div>
                        <div className="info-list-right">
                            <h2 className="info-list-right-title">
                                {t("info-section.about.title")}
                            </h2>
                            <p className="info-list-right-subtitle">
                                {t("info-section.about.context")}
                            </p>
                        </div>
                    </div>
                    <div className="info-list">
                        <div className="info-list-left">
                            <img src={info2} alt=""/>
                        </div>
                        <div className="info-list-right">
                            <h2 className="info-list-right-title">
                                {t("info-section.reservation.title")}
                            </h2>
                            <p className="info-list-right-subtitle">
                                {t("info-section.reservation.context")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="advertisement">
                <div className="container">
                    <div className="advertisement-box">
                        <img src={adv} className='advertisement-box-logo' alt="logo"/>
                        <h2 className='advertisement-box-title'>
                            {t("ads-banner")}
                        </h2>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default HomePage
