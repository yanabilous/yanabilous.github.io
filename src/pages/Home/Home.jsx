
import "./home.scss";
import logo from "../../img/Logo (1).svg"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const Home = (props) => {

const handleDownload = () => {
    const link = document.createElement('a');
  link.href = '/cv_fe_bilous.pdf';
  link.download = 'cv_bilous_fe.pdf';
  link.click();
  };

  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const isFirstVisit = !localStorage.getItem('animationStarted');

    if (isFirstVisit) {
      setAnimationStarted(true);
      localStorage.setItem('animationStarted', 'true');
    }
  }, []);


    return (
        <>
            {/*<div className={`home ${animationStarted ? 'animation-started' : ''}`}>*/}
            <div className="home">
                <div className="homeHeader">
                    <div className={`tittleHome ${animationStarted ? 'animation-started' : ''}`}>
                        <h4>Yana Bilous</h4>
                        <h1>Frontend developer</h1>
                        <p>Professional development and formation is an important constant</p>
                        <Link className="btn btnLeft" to={"mailto:yanabilouswork@gmail.com"} target="_blank">Contact me</Link>
                        <button className="btn btnRight" onClick={handleDownload}>Download cv</button>
                    </div>
                    <div className="photoMain">
                        <img
                            // src={"https://as1.ftcdn.net/v2/jpg/04/77/20/58/1000_F_477205869_ChRM4P1S0YifaOttDme8YeP9lPA0W7HF.jpg"}/>
                            src={logo} alt={"img "}/>
                    </div>
                </div>

                <div className="homeMain">
                    <div className="homeMainWrapper">
                        <p>EXPERTISE</p>
                        <div className={`listHome ${animationStarted ? 'animation-started' : ''}`}>
                            <ul>
                                <li style={{animation: " slideRight 4s linear 1"}}>HTML</li>
                                <li style={{animation: " slideRight 4s linear 1"}}>SCSS/CSS3/CSS</li>
                                <li style={{animation: " slideRight 4s linear 1"}}>JavaScript</li>
                                <li style={{animation: " slideRight 4s linear 1"}}>Bootstrap</li>

                            </ul>
                            <ul>
                                <li style={{animation: " slideRight 1s linear 1"}}>React</li>
                                <li style={{animation: " slideRight 1s linear 1"}}>Redux</li>
                                <li style={{animation: " slideRight 1s linear 1"}}>Gulp</li>
                                <li style={{animation: " slideRight 1s linear 1"}}>Node(basic)</li>
                            </ul>
                        </div>
                    </div>

                </div>


            </div>

        </>
    );
};

export default Home;