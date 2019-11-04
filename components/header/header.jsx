import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CustomModal from "../custom-modal/custom-modal";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import Router from "next/router";

const Header = () => {
  const [isModalOpen, setModel] = useState(false);

  return (
    <div>
      <Navbar bg="light" expand="lg" fixed="top" className="w-100">
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
          <div className="d-flex flex-grow-1 justify-content-end">
            <CartDropdown />
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
          <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
            <Nav>
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
