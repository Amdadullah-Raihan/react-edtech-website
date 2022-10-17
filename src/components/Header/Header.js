import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'


const Header = () => {
 
  
  let activeStyle = {
    textDecoration: "underline",
    color: "red"
  };

  // let activeClassName = "underline";
  
  return (
      <div>
          <div  className='header'>
              <div className="logo">
                 <h1>Pro Edu</h1>
                  
              </div>
              
              <div className='nav-bar'>
              <ul>
                  <li>
                    <NavLink
                      to="/home"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/courses"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Courses
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/deals"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Deals
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/success"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      Success
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      About
                    </NavLink>
                  </li>
                </ul>
              </div>
              {/* <FontAwesomeIcon icon={faBars} className="bars"></FontAwesomeIcon> */}
          </div>
         
              
      </div>

  );
};

export default Header;