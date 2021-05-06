import React, { Component } from "react";
import Button from "react-bootstrap/esm/Button";

class AddToCart extends Component {
  constructor(props) {
    super(props);
    this.updateCart = this.updateCart.bind(this);
    this.state = {
      inCart: false,
    };
  }

  updateCart() {
    var inCart = !this.state.inCart;
    this.setState({
      inCart: inCart,
    });

    this.props.updateCart();
  }

  render() {
    return (
      <Button
        onClick={this.updateCart}
        variant={this.state.inCart ? "danger" : "outline-primary"}
        size="sm"
      >
        {this.state.inCart ? "Remove" : "Add To Cart"}
      </Button>
    );
  }
}

export default AddToCart;
