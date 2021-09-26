//import { Navbar,Container, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import React, { useState } from 'react';
import {Button} from '@material-ui/core';
//import { Link} from 'react-router-dom'
import {Nav, NavLink, NavMenu} from './NavbarElements'

const NavBar = () => {
  return(
  <>
    <Nav>
      <NavMenu>
        <NavLink to='/dashboard' activeStyle>
            Dashboard
        </NavLink>
        <NavLink to='/voicerecoreder' activeStyle>
            Voice
        </NavLink>
        <NavLink to='/Patientdashboard' activeStyle>
            PROMs
        </NavLink>
      </NavMenu>
    </Nav>
  </>
  )
}

/*
function NavBar(){

    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Button onclick="window.location='/dashboard';">Dashboard</Button>
              <Link className='navEl' to="/dashboard">Dashboard</Link>
              <Link className='navEl' to="/voicerecoreder">Voice</Link>
              <Link className='navEl' to="/Patientdashboard">PROMs</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )

}
*/

export default NavBar;