import './assets/main.scss'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ErrorPage from "./pages/ErrorPage";
import Header from "./container/Header/Header";
import AboutPage from "./pages/About";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='about-us' element={<AboutPage/>} />
                    <Route path='/*' element={<ErrorPage/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
