import './ContactPage.scss'
import Footer from "../../container/Footer";

const ContactPage = () => {
    return (
        <>
            <section className="home-intro">
            </section>
            <div className="contact">
                <div className="container">
                    <h2 className='contact-title'>
                        Contacts
                    </h2>
                    <div className="contact-links">
                        <div className="contact-links-left ">
                            <a href="tel:+9981254444" className='phone'>
                                +9981254444
                            </a>
                            <a href="https://google.com" className='instagram'>
                                @uzummilliyoshxona
                            </a>
                        </div>
                        <div className="contact-links-right ">
                            <a href="https://google.com" className='telegram'>
                                @Uzum_Milliy_Oshxona
                            </a>
                            <a href="https://google.com" className='facebook'>
                                @Uzum_Milliy_Oshxona
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="location">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.812606691117!2d69.20061967667192!3d41.26941590330362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a19bb884ca9%3A0xb7386f7cd9f2cf2b!2sManagement%20Development%20Institute%20of%20Singapore%20in%20Tashkent!5e0!3m2!1sen!2s!4v1712203956040!5m2!1sen!2s"
                    width="600" height="450" allowFullScreen="" title='location' loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"/>
            </div>
            <Footer/>
        </>
    )
}

export default ContactPage
