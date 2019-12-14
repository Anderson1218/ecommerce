import React from "react";
import { PageWrapper } from "./layout.styles";
import Header from "../header/header";
import { withRedux } from "../../redux/with-redux";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <PageWrapper>{children}</PageWrapper>
    </div>
  );
};

export default withRedux(Layout);
