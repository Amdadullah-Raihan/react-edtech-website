import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css'


const Header = () => {
 
  
  let activeStyle = {
    textDecoration: "underline",
    fontWeight:'bold'
  };

  // let activeClassName = "underline";
  
  return (
     
      
      <div>
          <div  className='header-container'>
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
                      <p>Home</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/courses"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      <p>Courses</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/deals"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                     <p> Deals</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/success"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                     <p> Success</p>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/about"
                      style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                      }
                    >
                      <p>About Us</p>
                    </NavLink>
                  </li>
                  
                </ul>

              </div>
              <div>
                <NavLink
                        to="/register"
                        style={({ isActive }) =>
                          isActive ? activeStyle : undefined
                        }
                      >

                        <button className='register-btn'> Register</button>
                  </NavLink>
              </div>
              {/* <FontAwesomeIcon icon={faBars} className="bars"></FontAwesomeIcon> */}
          </div>
         
              
      </div>

  );
};

export default Header;