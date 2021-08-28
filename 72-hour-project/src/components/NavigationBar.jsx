import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import WhiteLlama from "../WhiteLlama.svg";

const NavigationBar = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <Navbar className="fixed-top" color="faded" light>
      <NavbarBrand href="/" className="mr-auto">
        <img src={WhiteLlama} />
      </NavbarBrand>
      <NavbarToggler onClick={toggleNavbar} className="mr-2" />
      <Collapse isOpen={!collapsed} navbar>
        <Nav navbar>
          <NavItem>
            <NavLink
              href="../components/Ticketmaster.jsx"
              className="NavLink nav-link"
            >
              Ticketmaster
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="./Weather.jsx" className="NavLink nav-link nav-link">
              Weather
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="./NASA.jsx" className="nav-link">
              NASA
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default NavigationBar;
