import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CustomModal from "../custom-modal/custom-modal";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import Link from "next/link";

const Header = () => {
  const [isModalOpen, setModel] = useState(false);

  return (
    <div className="w-100 fixed-top">
      <Navbar bg="white" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <a>SHOP STORE</a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Nav.Link
                  href="https://an-store.firebaseapp.com/"
                  target="_blank"
                >
                  前往後台
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav>
              <CartDropdown />
              <Nav.Item>
                <Nav.Link>
                  <Link href="/checkout">
                    <a>結帳</a>
                  </Link>
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
      `}</style>
    </div>
  );
};

export default Header;
