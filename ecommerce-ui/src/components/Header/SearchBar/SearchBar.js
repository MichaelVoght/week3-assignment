import React from "react";
import Col from "react-bootstrap/esm/Col";

const SearchBar = ({ keyword, setKeyword }) => {
  return (
    <Col xs={9}>
      <input
        value={keyword}
        placeholder={"Search Property"}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </Col>
  );
};

export default SearchBar;
