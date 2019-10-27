import React from "react";
import { Form, FormControl, Button } from "react-bootstrap";

const SearchBar = props => {
  return (
    <>
      <div className="search-bar">
        <Form className="d-flex">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button>Search</Button>
        </Form>
      </div>
      <style jsx>{`
        .search-bar {
          width: 100%;
          background: green;
          padding: 1rem 4rem 1rem 4rem;
        }
      `}</style>
    </>
  );
};

export default SearchBar;
