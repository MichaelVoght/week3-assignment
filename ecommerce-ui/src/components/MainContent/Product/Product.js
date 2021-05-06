import React, { Component } from "react";
import Image from "./Data/Image";
import Rating from "./Data/Rating";
import Property from "./Data/Property";
import Price from "./Data/Price/Price";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";

class Product extends Component {
  constructor(props) {
    super(props);
    this.State = {
      items: [],
    };
  }

  static propTypes = {
    data: PropTypes.object.isRequired,
  };

  updateCart = () => {
    let temp = {
      propTitle: this.props.data.title,
      propPrice: this.props.data.payment.cost,
    };

    this.props.handler(temp);
  };

  render() {
    return (
      <Col>
        <Image url={this.props.data.image} alt={this.props.data.title} />
        <Rating rating={this.props.data.rating} />
        <Property
          type={this.props.data.houseType}
          city={this.props.data.location.city}
          title={this.props.data.title}
        />
        <Price
          updateCart={this.updateCart}
          cost={this.props.data.payment.cost}
        />
      </Col>
    );
  }
}

export default Product;
