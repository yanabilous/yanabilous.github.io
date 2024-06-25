import "./projects.scss";
import {Link} from "react-router-dom";
import p1 from "../../img/pr1.png";
import p2 from "../../img/pr2.png";
import p3 from "../../img/pr3.png";
// import p3 from "../../img/p3.png";
// import p4 from "../../img/p4.png";
// // import p5 from "../../img/p5.png";
// import p7 from "../../img/p7.png";
import {useEffect, useState} from "react";

const Projects = (props) => {

  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const isFirstVisit = !localStorage.getItem("animationStarted");

    if (isFirstVisit) {
      setAnimationStarted(true);
      localStorage.setItem("animationStarted", "true");
    }
  }, []);

  return (
    <div className="projects">

      <h3>My projects:</h3>
      {/*<p className="projects-intro">Here are some of the projects I've been working on. Click on the project titles to view more details or visit the project repositories on GitHub.</p>*/}
      {/*<span></span>*/}

      <div className="cards cards_column">
        <div className={`floatLeft ${animationStarted ? "animation-started" : ""}`}>
          <Link className="tittleProject" to="https://final-project-2-iota.vercel.app/" target="_blank">Project
            1</Link>
          <p>Description: React/SCSS/MongoDB </p>
          <Link to="https://github.com/buzarig/Final-Project-2" target="_blank">
            <svg className="tanuki-logo" width="25" height="24" viewBox="0 0 25 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path className="tanuki-shape tanuki"
                    d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
                    fill="#E24329"></path>
              <path className="tanuki-shape right-cheek"
                    d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
                    fill="#FC6D26"></path>
              <path className="tanuki-shape chin"
                    d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z"
                    fill="#FCA326"></path>
              <path className="tanuki-shape left-cheek"
                    d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z"
                    fill="#FC6D26"></path>
            </svg>
          </Link>
        </div>
        <Link to="https://final-project-2-iota.vercel.app/" target="_blank">
          <img src={p1} alt={"img"}/>
        </Link>



      </div>

      <div className="cards cards_reverse">
        <Link to="https://main--blog-recipes.netlify.app/" target="_blank">
          <img src={p2} alt={"img"}/>
        </Link>

        <div className={`floatRight ${animationStarted ? "animation-started" : ""}`}>
          <Link className="tittleProject" to="https://main--blog-recipes.netlify.app/" target="_blank">Project
            2</Link>
          <p>Description: NextJS/TS </p>
          <Link to="https://github.com/yanabilous/recipe-blog" target="_blank">
            <svg className="tanuki-logo" width="25" height="24" viewBox="0 0 25 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path className="tanuki-shape tanuki"
                    d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
                    fill="#E24329"></path>
              <path className="tanuki-shape right-cheek"
                    d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
                    fill="#FC6D26"></path>
              <path className="tanuki-shape chin"
                    d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z"
                    fill="#FCA326"></path>
              <path className="tanuki-shape left-cheek"
                    d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z"
                    fill="#FC6D26"></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="cards cards_column">
        <div className={`floatLeft ${animationStarted ? "animation-started" : ""}`}>
          <Link className="tittleProject" to="https://yanabilous.github.io/comics_mar/" target="_blank">Project
            3</Link>
          <p>Description: React/SCSS/MongoDB </p>
          <Link to="https://github.com/yanabilous/comics_mar" target="_blank">
            <svg className="tanuki-logo" width="25" height="24" viewBox="0 0 25 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path className="tanuki-shape tanuki"
                    d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
                    fill="#E24329"></path>
              <path className="tanuki-shape right-cheek"
                    d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"
                    fill="#FC6D26"></path>
              <path className="tanuki-shape chin"
                    d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z"
                    fill="#FCA326"></path>
              <path className="tanuki-shape left-cheek"
                    d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z"
                    fill="#FC6D26"></path>
            </svg>
          </Link>
        </div>
        <Link to="https://yanabilous.github.io/comics_mar/" target="_blank"> <img src={p3} alt={"img"}/></Link>

        {/*<img src={p3} alt={"img"}/>*/}

      </div>

    </div>
  );
};

export default Projects;