import React from "react";
import Header from "../header/header";
import { withRedux } from "../../redux/with-redux";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="page-wrapper">{children}</div>
      <style jsx>
        {`
          .page-wrapper {
            display: flex;
            flex-direction: column;
            margin-top: 4rem;
          }
        `}
      </style>
    </>
  );
};

export default withRedux(Layout);
