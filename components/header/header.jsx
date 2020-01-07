import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  emailSignInStartAsync,
  signUpStartAsync,
  getUserProfileStartAsync,
  clearErrorInfo
} from "../../redux/user/user.action";
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
import { DualRing } from "react-awesome-spinners";

const Header = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setModel] = useState(false);

  useEffect(() => {
    dispatch(getUserProfileStartAsync());
  }, []);

  const currentUser = useSelector(selectCurrentUser);
  const userIsLoding = useSelector(selectUserIsLoading);
  const userError = useSelector(selectUserError);
  const closeModal = () => {
    dispatch(clearErrorInfo());
    setModel(false);
  };
  const dispatchClearError = () => dispatch(clearErrorInfo());

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
      pad={{ left: "xlarge", right: "xlarge", vertical: "small" }}
      elevation="medium"
      height={{ max: "70px" }}
    >
      <StyledHeading level="3" margin="none" onClick={() => Router.push("/")}>
        <img alt="" src="/logo.png" width="40" height="40" />
      </StyledHeading>

      <Box direction="row" height={{ max: "40px" }}>
        <Box width={{ min: "40px" }} height={{ min: "30px" }}>
          <CartDropdown />
        </Box>
        <Button icon={<Currency />} onClick={() => Router.push("/checkout")} />
        {/* <Button icon={<Cycle />} onClick={() => dispatch(toggleTheme())} /> */}
        {userIsLoding ? (
          <Box justify="center" width={{ max: "25px" }}>
            <DualRing size="30" />
          </Box>
        ) : currentUser ? (
          <UserProfileDropdown user={currentUser} />
        ) : (
          <Button icon={<User />} onClick={() => setModel(!isModalOpen)} />
        )}
      </Box>
      {isModalOpen && (
        <Modal
          onEsc={closeModal}
          onClickOutside={closeModal}
          responsive={false}
        >
          <LoginSignupForm
            handleSubmit={handleSubmit}
            error={userError}
            clearErrorInfo={dispatchClearError}
          />
        </Modal>
      )}
    </Box>
  );
};

export default Header;
