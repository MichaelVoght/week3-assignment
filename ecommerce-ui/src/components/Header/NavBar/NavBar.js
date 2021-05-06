import React, { Component } from "react";
import DropdownButton from "react-bootstrap/esm/DropdownButton";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import ButtonGroup from "react-bootstrap/esm/ButtonGroup";
import Col from "react-bootstrap/esm/Col";

class NavBar extends Component {
  render() {
    return (
      <Col>
        <ButtonGroup size="sm">
          <DropdownButton title="Products" id="Products" variant="outline-dark">
            <DropdownItem eventKey="1">Product 1</DropdownItem>
            <DropdownItem eventKey="2">Product 2</DropdownItem>
            <DropdownItem eventKey="3">Product 3</DropdownItem>
          </DropdownButton>

          <DropdownButton title="Brands" id="Brands" variant="outline-dark">
            <DropdownItem eventKey="1">Brands 1</DropdownItem>
            <DropdownItem eventKey="2">Brands 2</DropdownItem>
            <DropdownItem eventKey="3">Brands 3</DropdownItem>
          </DropdownButton>

          <DropdownButton title="Deals" id="Deals" variant="outline-dark">
            <DropdownItem eventKey="1">Deals 1</DropdownItem>
            <DropdownItem eventKey="2">Deals 2</DropdownItem>
            <DropdownItem eventKey="3">Deals 3</DropdownItem>
          </DropdownButton>

          <DropdownButton title="Support" id="Support" variant="outline-dark">
            <DropdownItem eventKey="1">Support 1</DropdownItem>
            <DropdownItem eventKey="2">Support 2</DropdownItem>
            <DropdownItem eventKey="3">Support 3</DropdownItem>
          </DropdownButton>
        </ButtonGroup>
      </Col>
    );
  }
}

export default NavBar;
