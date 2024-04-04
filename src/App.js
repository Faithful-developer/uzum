import './assets/main.scss'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./container/Header/Header";
import MenuPage from "./pages/Menu";
import Reservation from "./pages/Reservation";
import ContactPage from "./pages/Contact";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/menu' element={<MenuPage/>}/>
                    <Route path='/reservation' element={<Reservation/>}/>
                    <Route path='/contact' element={<ContactPage/>}/>
                    <Route path='/*' element={<ErrorPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
