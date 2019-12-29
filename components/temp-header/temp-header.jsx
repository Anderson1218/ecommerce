import React from "react";
import { useDispatch } from "react-redux";
import Router from "next/router";
import {
  toggleLeftPanel,
  toggleRightPanel
} from "../../redux/layout/layout.action";
import { toggleTheme } from "../../redux/theme/theme.action";
import { Box, Button, Heading } from "grommet";
import { User, Cycle, Tasks, Currency } from "grommet-icons";
import styled from "styled-components";
import CartIcon from "../cart-icon/cart-icon";

const StyledHeading = styled(Heading)`
  &:hover {
    cursor: pointer;
  }
`;

const Header = () => {
  const dispatch = useDispatch();
  return (
    <Box
      as="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: "1" }}
    >
      <StyledHeading level="3" margin="none" onClick={() => Router.push("/")}>
        HOME
      </StyledHeading>
      <Box direction="row">
        <Button>
          <CartIcon />
        </Button>
        <Button icon={<Currency />} onClick={() => Router.push("/checkout")} />
        <Button icon={<Cycle />} onClick={() => dispatch(toggleTheme())} />
        <Button icon={<Tasks />} onClick={() => dispatch(toggleLeftPanel())} />
        <Button icon={<User />} onClick={() => dispatch(toggleRightPanel())} />
      </Box>
    </Box>
  );
};

export default Header;
