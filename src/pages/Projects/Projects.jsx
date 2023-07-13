import "./projects.scss";
import {Link} from "react-router-dom";
import p1 from "../../img/p1.png";
import p2 from "../../img/p2.png";
import p3 from "../../img/p3.png";
import p4 from "../../img/p4.png";
// import p5 from "../../img/p5.png";
import p7 from "../../img/p7.png";

const Projects = (props) => {


    return (
        <div className="projects">

            <h3>My projects:</h3>
            {/*<span></span>*/}

            <div className="cards">
                <div className="floatLeft">
                    <Link className="tittleProject" to="https://yanabilous.github.io/Parallax/" target="_blank">Ptoject
                        1</Link>
                    <p>Description: HTML/CSS (Parallax) </p>
                    <Link to="https://gitlab.com/yanabilous/hw9.git" target="_blank"><svg className="tanuki-logo" width="25" height="24" viewBox="0 0 25 24" fill="none"
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
                        </svg></Link>
                </div>

                    <img src={p1} alt={"img"}/>

            </div>

            <div className="cards">
                <img src={p2} alt={"img"}/>
                <div className="floatRight">
                    <Link className="tittleProject" to="https://yanabilous.github.io/step_project/" target="_blank">Ptoject
                        2</Link>
                    <p>Description: HTML/CSS/JS </p>
                    <Link to="https://gitlab.com/yanabilous/step_project.git" target="_blank"><svg className="tanuki-logo" width="25" height="24" viewBox="0 0 25 24" fill="none"
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
                        </svg></Link>
                </div>
            </div>

            <div className="cards">
                <div>
                    <Link className="tittleProject" to="https://yanabilous.github.io/gulp/" target="_blank">Ptoject
                        3</Link>
                    <p>Description: HTML/SCSS/JS/gulp </p>
                    <Link to="https://gitlab.com/yanabilous/hw2_gulp_scss.git" target="_blank"><svg className="tanuki-logo" width="25" height="24" viewBox="0 0 25 24" fill="none"
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
                        </svg></Link>
                </div>
                <img src={p3} alt={"img"}/>
            </div>

            <div className="cards">
                <img src={p4} alt={"img"}/>
                <div>
                    <Link className="tittleProject" to="https://yanabilous.github.io/step_forkio/" target="_blank">Ptoject
                        4</Link>
                    <p>Description: HTML/SCSS/JS/gulp/adaptive</p>
                    <Link to="https://gitlab.com/yanabilous/step_project_forkio.git" target="_blank"><svg className="tanuki-logo" width="25" height="24" viewBox="0 0 25 24" fill="none"
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
                        </svg></Link>
                </div>
            </div>

            <div className="cards">
                <div>
                    <Link className="tittleProject" to="https://buzarig.github.io/step-3/" target="_blank">Ptoject
                        5</Link>
                    <p>Description: HTML/SCSS/JS/webpack </p>
                    <Link to="https://gitlab.com/buzarig/visits-step" target="_blank"><svg className="tanuki-logo" width="25" height="24" viewBox="0 0 25 24" fill="none"
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
                        </svg></Link>
                </div>
                <img src={p7} alt={"img"}/>
            </div>
          <div className="cards">
                <img alt={"img"}
                    src={"https://as1.ftcdn.net/v2/jpg/04/77/20/58/1000_F_477205869_ChRM4P1S0YifaOttDme8YeP9lPA0W7HF.jpg"}/>
                <div>
                    <Link className="tittleProject" to="https://yanabilous.github.io/comics_mar/" target="_blank">Ptoject
                        6</Link>
                    <p>Description: React</p>
                    <Link to="https://github.com/yanabilous/comics_mar" target="_blank"><svg className="tanuki-logo" width="25" height="24" viewBox="0 0 25 24" fill="none"
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
                        </svg></Link>
                </div>
            </div>


            {/*<div className="cards">*/}
            {/*    <img alt={"img"}*/}
            {/*        src={"https://as1.ftcdn.net/v2/jpg/04/77/20/58/1000_F_477205869_ChRM4P1S0YifaOttDme8YeP9lPA0W7HF.jpg"}/>*/}
            {/*    <div>*/}
            {/*        <Link className="tittleProject" to="https://yanabilous.github.io/shop_nike/" target="_blank">Ptoject*/}
            {/*            6</Link>*/}
            {/*        <p>Description: React + Vite</p>*/}
            {/*        <Link to="https://gitlab.com/yanabilous/hw4_react.git" target="_blank"><svg className="tanuki-logo" width="25" height="24" viewBox="0 0 25 24" fill="none"*/}
            {/*                 xmlns="http://www.w3.org/2000/svg">*/}
            {/*                <path className="tanuki-shape tanuki"*/}
            {/*                      d="m24.507 9.5-.034-.09L21.082.562a.896.896 0 0 0-1.694.091l-2.29 7.01H7.825L5.535.653a.898.898 0 0 0-1.694-.09L.451 9.411.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 2.56 1.935 1.554 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"*/}
            {/*                      fill="#E24329"></path>*/}
            {/*                <path className="tanuki-shape right-cheek"*/}
            {/*                      d="m24.507 9.5-.034-.09a11.44 11.44 0 0 0-4.56 2.051l-7.447 5.632 4.742 3.584 5.197-3.89.014-.01A6.297 6.297 0 0 0 24.507 9.5Z"*/}
            {/*                      fill="#FC6D26"></path>*/}
            {/*                <path className="tanuki-shape chin"*/}
            {/*                      d="m7.707 20.677 2.56 1.935 1.555 1.176a1.051 1.051 0 0 0 1.268 0l1.555-1.176 2.56-1.935-4.743-3.584-4.755 3.584Z"*/}
            {/*                      fill="#FCA326"></path>*/}
            {/*                <path className="tanuki-shape left-cheek"*/}
            {/*                      d="M5.01 11.461a11.43 11.43 0 0 0-4.56-2.05L.416 9.5a6.297 6.297 0 0 0 2.09 7.278l.012.01.03.022 5.16 3.867 4.745-3.584-7.444-5.632Z"*/}
            {/*                      fill="#FC6D26"></path>*/}
            {/*            </svg></Link>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/* <div className="cards">*/}
            {/*    <div>*/}
            {/*        <Link className="tittleProject" to="https://buzarig.github.io/step-3/" target="_blank">Ptoject 7</Link>*/}
            {/*        <p>Description: Webpack/ Bootstrap</p>*/}
            {/*        <Link to="https://gitlab.com/buzarig/visits-step" target="_blank">GitLab</Link>*/}
            {/*    </div>*/}
            {/*    <img src={p7}/>*/}
            {/*</div>*/}


        </div>
    );
};

export default Projects;