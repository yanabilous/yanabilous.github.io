import "./App.css";
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <>
            <Header/>
            {/*<About/>*/}

                    <Routes>

            <Route path="/" element={
                <Home/>
            }/>
            <Route path="/about" element={
                <About/>
            }/>

            <Route path="/projects" element={
                <Projects/>
            }/>

            <Route path="/contact" element={
                <Contact/>
            }/>


        </Routes>
            <Footer/>
        </>



    );
}

export default App;
