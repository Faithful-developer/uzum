import './HomePage.scss'
import {Link} from "react-router-dom";
import Beshbarmak from '../../assets/images/beshmarmoq.png'
import Manti from '../../assets/images/manti.png'
import Tandir from '../../assets/images/tandir.png'
import info1 from '../../assets/images/info-1.png'
import info2 from '../../assets/images/info-2.png'
import adv from '../../assets/images/adv-logo.png'
import Footer from "../../container/Footer";

const HomePage = () => {
    return (
        <>
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
                                    Beshbarmak
                                </span>
                            </Link>
                        </li>
                        <li className="food-type-list-item">
                            <Link to='/'>
                                <img src={Manti} alt=""/>
                                <span className="name">
                                    Manti
                                </span>
                            </Link>
                        </li>
                        <li className="food-type-list-item">
                            <Link to='/'>
                                <img src={Tandir} alt=""/>
                                <span className="name">
                                    Tandoor meat
                                </span>
                            </Link>
                        </li>
                    </ul>
                    <div className="btn-container">
                        <button className="order-btn">
                            Order Now
                        </button>
                    </div>
                </div>
            </section>
            <section className="info">
                <div className="container">
                    <div className="info-list">
                        <div className="info-list-left">
                            <img src={info1} alt=""/>
                        </div>
                        <div className="info-list-right">
                            <h2 className="info-list-right-title">
                                About Us
                            </h2>
                            <p className="info-list-right-subtitle">
                                Our national restaurant offers you unforgettable taste and experience. At Uzum National
                                Restaurant, we take pride in honoring these time-honored culinary traditions while
                                infusing them with a contemporary twist. Our journey began with a passion for sharing
                                the authentic flavors of Uzbekistan with our clients.
                            </p>
                        </div>
                    </div>
                    <div className="info-list">
                        <div className="info-list-left">
                            <img src={info2} alt=""/>
                        </div>
                        <div className="info-list-right">
                            <h2 className="info-list-right-title">
                                Reservation
                            </h2>
                            <p className="info-list-right-subtitle">
                                At Uzum National Restaurant, we take pride in curating an atmosphere that embraces the
                                spirit of Uzbek hospitality. Our friendly and attentive staff are dedicated to ensuring
                                that every guest feels welcomed and cared for from the moment they arrive.
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
                            Where Every Meal Feels Like Home
                        </h2>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default HomePage
