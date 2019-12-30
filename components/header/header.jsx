import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { emailSignInStartAsync } from "../../redux/user/user.action";
import { signUpStartAsync } from "../../redux/user/user.action";
import { toggleTheme } from "../../redux/theme/theme.action";
import { selectUserError } from "../../redux/user/user.selectors";
import {
  selectCurrentUser,
  selectUserIsLoading
} from "../../redux/user/user.selectors";
import Router from "next/router";

import { Box, Button } from "grommet";
import { User, Cycle, Currency } from "grommet-icons";
import { StyledHeading } from "./header.styles";
import Modal from "../modal/modal";
import LoginSignupForm from "../login-signup-form/login-signup-form";
import CartDropdown from "../cart-dropdown/cart-dropdown";
import UserProfileDropdown from "../user-profile-dropdown/user-profile-dropdown";

const Header = () => {
  const [isModalOpen, setModel] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const userIsLoding = useSelector(selectUserIsLoading);
  const userError = useSelector(selectUserError);
  const dispatch = useDispatch();
  const closeModal = () => setModel(false);

  const handleSubmit = async (e, values, isLogin) => {
    e.preventDefault();
    const { email, password, name } = values;
    if (isLogin) {
      const err = await dispatch(emailSignInStartAsync(email, password));
      if (!err) {
        closeModal();
      }
    } else {
      const err = await dispatch(signUpStartAsync(email, password, name));
      if (!err) {
        closeModal();
      }
    }
  };

  return (
    <Box
      as="header"
      direction="row"
      align="center"
      justify="between"
      // background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
    >
      <StyledHeading level="3" margin="none" onClick={() => Router.push("/")}>
        <img alt="" src="/logo.png" width="50" height="40" />
      </StyledHeading>
      <Box direction="row">
        <CartDropdown />
        <Button icon={<Currency />} onClick={() => Router.push("/checkout")} />
        <Button icon={<Cycle />} onClick={() => dispatch(toggleTheme())} />
        {currentUser ? (
          <UserProfileDropdown user={currentUser} />
        ) : (
          <Button icon={<User />} onClick={() => setModel(!isModalOpen)} />
        )}
      </Box>
      {isModalOpen && (
        <Modal onEsc={closeModal} onClickOutside={closeModal}>
          <LoginSignupForm handleSubmit={handleSubmit} error={userError} />
        </Modal>
      )}
    </Box>
  );
};

export default Header;
