import React, { Component } from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import NavBar from "./NavBar/NavBar";
import SearchBar from "./SearchBar/SearchBar";
import ShoppingCart from "./ShoppingCart/ShoppingCart";

class Header extends Component {
  render() {
    return (
      <Container className="header">
        <Row>
          <SearchBar />
          <ShoppingCart cart={this.props.cart} />
        </Row>
        <Row>
          <NavBar />
        </Row>
      </Container>
    );
  }
}

export default Header;
