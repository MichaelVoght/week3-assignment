import React, { Component } from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import AddToCart from "./AddToCart";

class Price extends Component {
  static propTypes = {
    cost: PropTypes.number.isRequired,
  };

  render() {
    return (
      <Row>
        <Col xs={6}>
          <span>${this.props.cost} / night</span>
        </Col>
        <AddToCart updateCart={this.props.updateCart} />
      </Row>
    );
  }
}

export default Price;
