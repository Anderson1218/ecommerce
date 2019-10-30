import React from "react";
import Header from "../header/header";
import SearchBar from "../search-bar/search-bar";
const Layout = props => {
  return (
    <>
      <Header />
      <div className="page-wrapper">{props.children}</div>
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

export default Layout;
