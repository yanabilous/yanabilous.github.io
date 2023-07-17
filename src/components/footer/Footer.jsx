import {Link} from "react-router-dom";
import "./footer.scss";
// import telegram from "../../img/Telegram_(software)-Logo.wine.svg";


const Footer = (props) => {


    return (
        <div className="footer">
            <Link className="logo" to="/">YB</Link>
            <div className="contacts">
                <p>yanabilouswork@gmail.com</p>
            </div>
            <div>
                <Link className="in" to="https://www.linkedin.com/in/yana-bilous-6270b9194/" target="_blank">in</Link>
            </div>


        </div>
    );
};

export default Footer;