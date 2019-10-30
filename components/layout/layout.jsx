import React from "react";
import Header from "../header/header";
import SearchBar from "../search-bar/search-bar";
const Layout = props => {
  return (
    <>
      <div className="w-100 fixed-top">
        <Header />
      </div>
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
