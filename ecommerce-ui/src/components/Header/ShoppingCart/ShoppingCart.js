import React, { Component } from "react";
import Col from "react-bootstrap/esm/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class ShoppingCart extends Component {
  getTotalPrice = () => {
    return this.props.cart.reduce(
      (total, item) => (total = total + item.propPrice),
      0
    );
  };

  getTotalItems = () => {
    return this.props.cart.length;
  };

  render() {
    return (
      <Col xs={3} className="shoppingcart">
        <span>{this.getTotalItems()}</span>
        <FontAwesomeIcon icon={faShoppingCart} />
        <span>${this.getTotalPrice()}.00</span>
      </Col>
    );
  }
}

export default ShoppingCart;
