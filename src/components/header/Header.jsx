// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './header.scss';
//
// const Header = () => {
//   const [isOpen, setIsOpen] = useState(false);
//
//   const handleMenuToggle = () => {
//     setIsOpen(!isOpen);
//   };
//
//   return (
//     <div className="wrapper">
//       <div className="header">
//         <Link className="logo" to="/">
//           YB
//         </Link>
//
//         <button className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
//           <span>f</span>
//           <span>f</span>
//           <span>h</span>
//         </button>
//
//         <div className={`nav ${isOpen ? 'open' : ''}`}>
//           <ul className={`burger-menu ${isOpen ? 'open' : ''}`}>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About me</Link>
//             </li>
//             <li>
//               <Link to="/projects">Projects</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact me</Link>
//             </li>
//           </ul>
//         </div>
//
//         <div>
//           <Link className="in" to="https://www.linkedin.com/in/yana-bilous-6270b9194/" target="_blank">
//             in
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };
//
// export default Header;




//
// import {Link} from "react-router-dom";
// import "./header.scss";
//
// const Header = (props) => {
//
//
//     return (
//         <div className="wrapper">
//             <div className="header">
//                 <Link className="logo" to="/">YB</Link>
//                 <div className="nav">
//                     <ul>
//                         <li><Link to="/">Home</Link></li>
//                         <li><Link to="/about">About me</Link></li>
//                         <li><Link to="/projects">Projects</Link></li>
//                         <li><Link to="/contact">Contact me</Link></li>
//                     </ul>
//                 </div>
//                 <div>
//                     <Link className="in" to="https://www.linkedin.com/in/yana-bilous-6270b9194/" target="_blank">
//
//                         in</Link>
//                 </div>
//
//
//             </div>
//         </div>
//     );
// };
//
// export default Header;



import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="wrapper">
      <div className={`header ${isOpen ? 'open' : ''}`}>
        <Link className="logo" to="/">
          YB
        </Link>
        <button className={`burger-icon ${isOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav ${isOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
         <div>
           <Link className="in" to="https://www.linkedin.com/in/yana-bilous-6270b9194/" target="_blank">
             in
           </Link>
         </div>
      </div>
    </div>
  );
};

export default Header;
