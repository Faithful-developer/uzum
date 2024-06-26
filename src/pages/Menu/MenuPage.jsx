import './MenuPage.scss'
import MenuItem from "../../components/MenuItem";
import {useEffect, useState} from "react";
import axios from "axios";
import {HashLink as Link} from "react-router-hash-link";
import Footer from "../../container/Footer/Footer";
import {Helmet} from "react-helmet";
import {useTranslation} from "react-i18next";

const MenuPage = () => {
    const {t} = useTranslation()
    const [saladData, setSaladData] = useState([]);
    const [firstData, setFirstData] = useState([]);
    const [mainData, setMainData] = useState([]);
    const [samsa, setSamsa] = useState([]);
    const [grill, setGrill] = useState([]);
    const [kebab, setKebab] = useState([]);
    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        axios.get('/jsonData/salads.json')
            .then(response => {
                setSaladData(response.data)
            })
            .catch(error => console.error("Failed to load data: ", error));
    }, [])

    useEffect(() => {
        axios.get('/jsonData/first.json')
            .then(response => {
                setFirstData(response.data)
            })
            .catch(error => console.error("Failed to load data: ", error));
    }, [])

    useEffect(() => {
        axios.get('/jsonData/mainFoods.json')
            .then(response => {
                setMainData(response.data)
            })
            .catch(error => console.error("Failed to load data: ", error));
    }, [])

    useEffect(() => {
        axios.get('/jsonData/samsa.json')
            .then(response => {
                setSamsa(response.data)
            })
            .catch(error => console.error("Failed to load data: ", error))
    }, [])

    useEffect(() => {
        axios.get('/jsonData/grill.json')
            .then(response => {
                setGrill(response.data)
            })
            .catch(error => console.error("Failed to load data: ", error))
    }, [])

    useEffect(() => {
        axios.get('/jsonData/kebab.json')
            .then(response => {
                setKebab(response.data)
            })
            .catch(error => console.error("Failed to load data: ", error));
    }, []);

    useEffect(() => {
        axios.get('jsonData/drink.json')
            .then(response => {
                setDrinks(response.data)
            })
            .catch(error => console.log("Failed to load data: ", error))
    })

    return (
        <>
            <Helmet>
                <title>Uzum uz | Menu Page</title>
            </Helmet>
            <section className="top-menu-list">
                <div className="container">
                    <h2 className="top-menu-list-name">
                        Menu
                    </h2>
                    <ul className="top-menu-list-links">
                        <li className="top-menu-list-links-item">
                            <Link smooth to='#salads'>
                                {t("menu.food-type.0")}
                            </Link>
                        </li>
                        <li className="top-menu-list-links-item">
                            <Link smooth to='#first'>
                                {t("menu.food-type.1")}
                            </Link>
                        </li>
                        <li className="top-menu-list-links-item">
                            <Link smooth to='#main'>
                                {t("menu.food-type.2")}
                            </Link>
                        </li>
                        <li className="top-menu-list-links-item">
                            <Link smooth to='#samsa'>
                                {t("menu.food-type.3")}
                            </Link>
                        </li>
                        <li className="top-menu-list-links-item">
                            <Link smooth to='#grill'>
                                {t("menu.food-type.4")}
                            </Link>
                        </li>
                        <li className="top-menu-list-links-item">
                            <Link to='#kebab'>
                                {t("menu.food-type.5")}
                            </Link>
                        </li>
                        <li className="top-menu-list-links-item">
                            <Link smooth to='#drinks'>
                                {t("menu.food-type.6")}
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="menu-list" id='salads'>
                <div className="container">
                    <h2>Salad</h2>
                    <ul className="menu-list-container">
                        {saladData.map((salad, index) => (
                            <MenuItem
                                key={index}
                                imgLink={salad.foodImgLink}
                                itemName={salad.foodName}
                                itemPrice={salad.foodPrice}
                            />
                        ))}
                    </ul>
                </div>
            </section>
            <section className="menu-list" id='first'>
                <div className="container">
                    <h2>
                        First Dish
                    </h2>
                    <ul className="menu-list-container">
                        {firstData.map((salad, index) => (
                            <MenuItem
                                key={index}
                                imgLink={salad.foodImgLink}
                                itemName={salad.foodName}
                                itemPrice={salad.foodPrice}
                            />
                        ))}
                    </ul>
                </div>
            </section>
            <section className="menu-list" id='main'>
                <div className="container">
                    <h2>
                        Main Dishes
                    </h2>
                    <ul className="menu-list-container">
                        {mainData.map((salad, index) => (
                            <MenuItem
                                key={index}
                                imgLink={salad.foodImgLink}
                                itemName={salad.foodName}
                                itemPrice={salad.foodPrice}
                            />
                        ))}
                    </ul>
                </div>
            </section>
            <section className="menu-list" id='samsa'>
                <div className="container">
                    <h2>
                        Samsa
                    </h2>
                    <ul className="menu-list-container">
                        {samsa.map((salad, index) => (
                            <MenuItem
                                key={index}
                                imgLink={salad.foodImgLink}
                                itemName={salad.foodName}
                                itemPrice={salad.foodPrice}
                            />
                        ))}
                    </ul>
                </div>
            </section>
            <section className="menu-list" id='grill'>
                <div className="container">
                    <h2>
                        Grill
                    </h2>
                    <ul className="menu-list-container">
                        {grill.map((salad, index) => (
                            <MenuItem
                                key={index}
                                imgLink={salad.foodImgLink}
                                itemName={salad.foodName}
                                itemPrice={salad.foodPrice}
                            />
                        ))}
                    </ul>
                </div>
            </section>
            <section className="menu-list" id='kebab'>
                <div className="container">
                    <h2>
                        Kebab
                    </h2>
                    <ul className="menu-list-container">
                        {kebab.map((salad, index) => (
                            <MenuItem
                                key={index}
                                imgLink={salad.foodImgLink}
                                itemName={salad.foodName}
                                itemPrice={salad.foodPrice}
                            />
                        ))}
                    </ul>
                </div>
            </section>
            <section className="menu-list" id='drinks'>
                <div className="container">
                    <h2>
                        Drinks
                    </h2>
                    <ul className="menu-list-container">
                        {drinks.map((salad, index) => (
                            <MenuItem
                                key={index}
                                imgLink={salad.foodImgLink}
                                itemName={salad.foodName}
                                itemPrice={salad.foodPrice}
                            />
                        ))}
                    </ul>
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default MenuPage
