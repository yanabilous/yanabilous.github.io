import "./home.scss";
import logo from "../../img/Logo (1).svg";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import video from "../../img/main.mp4";


const Home = (props) => {

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv_bilous.pdf";
    link.download = "cv_bilous.pdf";
    link.click();
  };

  const [animationStarted, setAnimationStarted] = useState(false);


  useEffect(() => {
    const isFirstVisit = !localStorage.getItem("animationStarted");

    if (isFirstVisit) {
      setAnimationStarted(true);
      localStorage.setItem("animationStarted", "true");
    }
  }, []);


  return (
    <>

      <div className="home">
        <div className="homeHeader">
          <video autoPlay loop muted playsInline className="background-video">
            <source src={video} type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <div className={`tittleHome ${animationStarted ? "animation-started" : ""}`}>
            <h4>Yana Bilous</h4>
            <h1>Frontend developer</h1>
            <p>Professional development and formation is an important constant</p>
            <div className="btn_home">
              <Link className="btn btnLeft" to={"mailto:yanabilous05@gmail.com"} target="_blank">Contact me</Link>
              <button className="btn btnRight" onClick={handleDownload}>Download cv</button>
            </div>
          </div>
          <div className="photoMain">
            <img src={logo} alt={"img "}/>
          </div>
        </div>

        <div className="homeMain">
          <div className="main-header">
            <p className="title2">EXPERTISE</p>
            <p className="additional-text">
              Here you can find my expertise in various front-end technologies and tools. From HTML and CSS to advanced
              JavaScript frameworks and libraries, I have a comprehensive skill set to tackle any front-end development
              project.
            </p>
          </div>


          <div className="homeMainWrapper">

            <div className="blur-bg">
              <div className="parallax"></div>


              <div className={`listHome ${animationStarted ? "animation-started" : ""}`}>
                <ul>
                  <li style={{animation: " slideRight 4s linear 1"}}>HTML</li>
                  <li style={{animation: " slideRight 4s linear 1"}}>SCSS/CSS3/CSS</li>
                  <li style={{animation: " slideRight 4s linear 1"}}>JavaScript</li>
                  <li style={{animation: " slideRight 4s linear 1"}}>Bootstrap</li>
                  <li style={{animation: " slideRight 4s linear 1"}}>Tailwind</li>
                  <li style={{animation: " slideRight 4s linear 1"}}>Material UI</li>
                  <li style={{animation: " slideRight 4s linear 1"}}>Vite</li>
                  <li style={{animation: " slideRight 4s linear 1"}}>React</li>


                </ul>
                <ul>

                  <li style={{animation: " slideRight 1s linear 1"}}>TypeScript</li>
                  <li style={{animation: " slideRight 1s linear 1"}}>Next.js</li>
                  <li style={{animation: " slideRight 1s linear 1"}}>Node</li>
                  <li style={{animation: " slideRight 1s linear 1"}}>Redux</li>
                  <li style={{animation: " slideRight 1s linear 1"}}>Gulp</li>
                  <li style={{animation: " slideRight 1s linear 1"}}>REST API</li>
                  <li style={{animation: " slideRight 1s linear 1"}}>MongoDB</li>
                  <li style={{animation: " slideRight 1s linear 1"}}>Firebase</li>
                </ul>
              </div>

            </div>
          </div>

        </div>


      </div>

    </>
  );
};

export default Home;