import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CustomModal from "../custom-modal/custom-modal";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import Router from "next/router";

const Header = () => {
  const [isModalOpen, setModel] = useState(false);

  return (
    <div className="w-100 fixed-top">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <img
              alt=""
              src="/logo.png"
              width="50"
              height="40"
              className="d-inline-block align-top brand-image"
              onClick={() => Router.push("/")}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <CartDropdown />
              <Nav.Item>
                <Nav.Link onClick={() => Router.push("/checkout")}>
                  來去結帳
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link onClick={() => setModel(!isModalOpen)}>登入</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <CustomModal show={isModalOpen} onHide={() => setModel(false)} />
      <style>{`
        .dropdown-toggle::after {
          display: none !important;
        }
        .brand-image:hover {
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default Header;
