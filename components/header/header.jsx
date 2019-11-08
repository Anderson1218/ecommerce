import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import CustomModal from "../custom-modal/custom-modal";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import UserProfileDropdown from "../user-profile-dropdown/user-profile-dropdown";
import Router from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { getUserProfileStartAsync } from "../../redux/user/user.action";
import ModalContext from "../../context/modalContext";

const Header = () => {
  const [isModalOpen, setModel] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();
  const closeModal = () => setModel(false);

  useEffect(() => {
    dispatch(getUserProfileStartAsync());
  }, []);

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
            <Nav className="align-items-center">
              <Nav.Item>
                <Nav.Link onClick={() => Router.push("/checkout")}>
                  來去結帳
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                {currentUser ? (
                  <UserProfileDropdown user={currentUser} />
                ) : (
                  <Nav.Link onClick={() => setModel(!isModalOpen)}>
                    登入
                  </Nav.Link>
                )}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ModalContext.Provider value={{ closeModal }}>
        <CustomModal show={isModalOpen} onHide={closeModal} />
      </ModalContext.Provider>
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
