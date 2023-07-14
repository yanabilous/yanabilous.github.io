import "./about.scss";
import img from "../../img/img.PNG"
import {useEffect, useState} from "react";

const About = (props) => {

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
        <div className="about">

            <div className="aboutWrapper">
                <div>
                    <img className="photoAbout"
                         src={img} alt="img"/>
                </div>

                <div className={`aboutHeader ${animationStarted ? 'animation-started' : ''}`}>
                    <h3  style={{animation: "slideLeft 0.5s linear forwards"}}>HELLO, I'M YANA</h3>
                    <p  className='upper' >I am passionate about building great web applications that meet the needs of users and clients alike.</p>
                    <p>I am a professional with a passion for creating visually appealing,
                        interactive, and intuitive web applications. They possess a solid foundation in web development
                        technologies such as HTML, CSS, and JavaScript, as well as proficiency in frontend development
                        frameworks and libraries like React and Bootstrap. I like to develop and I am open to new
                        experience and new knowledge.</p>
                    <button onClick={handleDownload} type="button">Download cv</button>
                </div>
            </div>

            <div className="education">

                <h3>Education</h3>


                <div className="educationLeft">
                    <h5>DAN.IT / 2022</h5>
                    <p>Frontend developer</p>

                    {/*<h5>GoIT / 2019</h5>*/}
                    {/*<p>Manual QA</p>*/}
                </div>
            </div>

            <div className="mainAbout">
                <div className={`mainAboutWrapper ${animationStarted ? 'animation-started' : ''}`}>
                    <div>
                        <p>SOFT SKILLS</p>
                        <ul>
                            <li>Responsibility</li>
                            <li>Time management</li>
                            <li>Open-mindedness</li>
                            <li>Creativeness</li>
                            <li>Multitasking</li>
                            <li>Perfectionist</li>
                            <li>Stress resistant</li>
                            <li>Proactivity</li>
                            <li>Analytical mind</li>
                        </ul>
                    </div>
                    <div>
                        <p>SOFTWARE</p>
                        <ul>
                            <li>PyCharm</li>
                            <li>Visual Studio Code</li>
                            <li>Sass</li>
                            <li>Git</li>
                            <li>Gulp </li>
                            <li>Webpack</li>
                            <li>Vite</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Chrome DevTools </li>
                            <li>Figma</li>
                        </ul>
                    </div>
                    <div>
                        <p>LANGUAGES</p>
                        <ul>
                            <li>Ukrainian</li>
                            <li>English (A2)</li>
                        </ul>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default About;