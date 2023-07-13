import {Link} from "react-router-dom";
import "./header.scss";

const Header = (props) => {


    return (
        <div className="wrapper">
            <div className="header">
                <Link className="logo" to="/">YB</Link>
                <div className="nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About me</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact me</Link></li>
                    </ul>
                </div>
                <div>
                    <Link className="in" to="https://www.linkedin.com/in/yana-bilous-6270b9194/" target="_blank">

                        in</Link>
                </div>


            </div>
        </div>
    );
};

export default Header;