import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = props => {
  return (
    <>
      <div className="search-bar-wrapper">
        <div className="search-bar">
          <Form className="d-flex">
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button>Search</Button>
          </Form>
        </div>
      </div>
      <style jsx>{`
        .search-bar-wrapper {
          background: tansparent;
          padding: 1rem 4rem 1rem 4rem;
        }
        .search-bar {
          margin: 0 auto;
          max-width: 800px;
          min-width: 400px;
        }
      `}</style>
    </>
  );
};

export default SearchBar;
