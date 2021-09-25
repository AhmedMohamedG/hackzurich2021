import { Navbar,Container, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import React, { useState } from 'react';

import { Link} from 'react-router-dom'

function NavBar(){

    return(
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ePROM Plus</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className='navEl' to="/dashboard">Dashboard</Link>
              <Link className='navEl' to="/voicerecoreder">Voice</Link>
              <Link className='navEl' to="/Patientdashboard">PROMs</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )

}

export default NavBar;