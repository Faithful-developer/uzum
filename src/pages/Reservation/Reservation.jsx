import './Reservation.scss'
import {Helmet} from "react-helmet";
import Footer from "../../container/Footer/Footer";
import {useState} from "react";

const Reservation = () => {
    const [selectedFloors, setSelectedFloors] = useState('');
    const [selectedPlaces, setSelectedPlaces] = useState('')
    const [selectedNumber, setselectedNumber] = useState('')
    const [submitted, setSubmitted] = useState(false);

    const HandleForSubmit = (event) => {
        event.preventDefault()
        setSubmitted(true)
    }

    return (
        <>
            <Helmet>
                <title>Uzum.uz | Reservation Page</title>
            </Helmet>
            <section className="home-intro">
            </section>
            <section className="reservation">
                <div className="container">
                    <h1 className='reservation-title'>
                        Reservation
                    </h1>
                    <form className="reservation-form" id='reservation-form' onSubmit={HandleForSubmit}>
                        <label htmlFor="floors">Choose a floor</label>
                        <select
                            id="floors"
                            name="floors"
                            className='reservation-form-floors'
                            value={selectedFloors}
                            onChange={(e) => setSelectedFloors(e.target.value)}
                            required
                        >
                            <option value="" disabled selected>Choose a floor</option>
                            <option value="first">1</option>
                            <option value="second">2</option>
                            <option value="third">3</option>
                            <option value="outside">Outside</option>
                        </select>
                        <label htmlFor="number-place">Number of places:</label>
                        <select
                            id="number-place"
                            name="number-place"
                            className='reservation-form-number-place'
                            value={selectedPlaces}
                            onChange={(e) => setSelectedPlaces(e.target.value)}
                            required
                        >
                            <option value="" disabled selected>Choose a number of places</option>
                            <option value="two">2</option>
                            <option value="four">4</option>
                            <option value="ten">10</option>
                            <option value="moreten">10+</option>
                        </select>
                        <input
                            type="text"
                            className='reservation-form-number'
                            value={selectedNumber}
                            required
                            onChange={(e) => setselectedNumber(e.target.value)}
                        />
                        <p>Call for more info:</p>
                        <p>+9981254444</p>
                        <button className="reservation-form-submit" type='submit'>
                            Order Now
                        </button>
                    </form>
                    {submitted && (
                        <div className="reservation-result">
                            <h2>Reservation Details</h2>
                            <p>Selected Floor: {selectedFloors}</p>
                            <p>Number of Seats: {selectedPlaces}</p>
                            <p>Phone Number: {selectedNumber}</p>
                        </div>
                    )}
                </div>
            </section>
            <Footer/>
        </>
    )
}

export default Reservation
