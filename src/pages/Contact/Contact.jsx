import {Link} from "react-router-dom";
import "./contact.scss";
import Particle from "./Particle";

import sprite from "../../img/sprite.svg";


const Contact = (props) => {


  return (
    <div className="contact">
      {/*<Particle/>*/}
      <div className="contactWrapper">
        <Particle/>
        <section className="content">

          <h3 className="title-contacts">My contacts: </h3>


          <div className="flex">


            <div className="icons">


              <Link to={"https://t.me/by1405"} target="_blank">
                <svg style={{fill: "black"}} width={50} height={50}>
                  <use xlinkHref={`${sprite}#telegram`}></use>
                </svg>
              </Link>
              <Link to={"https://www.linkedin.com/in/yana-bilous-6270b9194/"} target="_blank">
                <svg style={{fill: "black"}} width={50} height={50}>
                  <use xlinkHref={`${sprite}#linked`}></use>
                </svg>
              </Link>
              <Link to={"https://gitlab.com/yanabilous"} target="_blank">
                <svg style={{fill: "black"}} width={50} height={50}>
                  <use xlinkHref={`${sprite}#gitlab`}></use>
                </svg>

              </Link>

              <Link to={"https://github.com/yanabilous"} target="_blank">
                <svg style={{fill: "black"}} width={50} height={50}>
                  <use xlinkHref={`${sprite}#github`}></use>
                </svg>
              </Link>
            </div>


            <div className="mail">
              <Link to={"mailto:yanabilous05@gmail.com"} target="_blank">
                <svg style={{fill: "black"}} width={50} height={50}>
                  <use xlinkHref={`${sprite}#mail`}></use>
                </svg>
                yanabilous05@gmail.com </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Contact;