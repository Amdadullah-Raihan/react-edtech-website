import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import './Header.css'


const Header = () => {
 
  
  let activeStyle = {
    textDecoration: "underline",
    fontWeight:'bold',
    color:"#289BDE"
  };

  const navigate = useNavigate();
  const handleRegister = () => {
    navigate('/register')
  }

  // let activeClassName = "underline";
  
  return (
     
      
      <div>
          <div  className='header-container'>
              <div className="logo">
                 <h1>Pro Edu</h1>
                  
              </div>
              <Navbar collapseOnSelect expand="sm"  variant="light">
                  <Navbar.Toggle aria-controls="navbarScroll" data-bs-toggle="collapse" data-bs-target="#navbarScroll" />
                  <Navbar.Collapse id="navbarScroll">
                      <Nav className='nav-bar'>
                          <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }  eventKey="1" as={Link} to="/home">Home</NavLink>
                          <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }  eventKey="1" as={Link} to="/courses">Courses</NavLink>
                          <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }  eventKey="2" as={Link} to="/deals">Deals</NavLink>
                          <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }  eventKey="3" as={Link} to="/success">Success</NavLink>
                          <NavLink style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                          }  eventKey="1" as={Link} to="/about">About us</NavLink>
                      </Nav>
                  </Navbar.Collapse>     
            </Navbar>
  
              <div>
                  <button onClick={handleRegister} className='register-btn'> Register</button> 
              </div>
              {/* <FontAwesomeIcon icon={faBars} className="bars"></FontAwesomeIcon> */}
          </div>
         
              
      </div>

  );
};

export default Header;