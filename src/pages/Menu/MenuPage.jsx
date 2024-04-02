import './MenuPage.scss'
import MenuItem from "../../components/MenuItem";
import {useEffect, useState} from "react";
import axios from "axios";
import {HashLink as Link} from "react-router-hash-link";

const MenuPage = () => {
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
            <section className="top-menu-list">
                <div className="container">
                    <h2 className="top-menu-list-name">
                        Menu
                    </h2>
                    <ul className="top-menu-list-links">
                        <li className="top-menu-list-links-item">
                            <Link smooth to='#salads'>
                                Salads
                            </Link>
                        </li>
                        <li className="top-menu-list-links-item">
                            <Link smooth to='#first'>
                                First Dishes
                            </Link>
                        </li>
                        <li className="top-menu-list-links-item">
                            <Link smooth to='#main'>
                                Main dishes
                            </Link>
                        </li>
                        <li className="top-menu-list-links-item">
                            <Link smooth to='#samsa'>
                                Samsa
                            </Link>
                        </li>
                        <li className="top-menu-list-links-item">
                            <Link smooth to='#grill'>
                                Grill
                            </Link>
                        </li>
                        <li className="top-menu-list-links-item">
                            <Link to='#kebab'>
                                Kebab
                            </Link>
                        </li>
                        <li className="top-menu-list-links-item">
                            <Link smooth to='#drinks'>
                                Drinks
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
        </>
    )
}

export default MenuPage
