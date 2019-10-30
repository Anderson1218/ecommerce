import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import CartIcon from "../cart-icon/cart-icon";

const Header = props => {
  return (
    <div className="nav-wrapper">
      <Navbar bg="white" expand="lg">
        <Navbar.Brand href="#home">Hello</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Item>
              <CartIcon />
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://an-store.firebaseapp.com/"
                target="_blank"
              >
                前往後台
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">註冊</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">登入</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <style jsx>{`
        .nav-wrapper {
          padding: 0 10rem;
          background-color: white;
        }
      `}</style>
    </div>
  );
};

export default Header;
