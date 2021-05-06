import React, { Component } from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

class Property extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Row>
        <Col>
          <span>
            {this.props.type} * {this.props.city}
          </span>
          <br />
          <span>{this.props.title}</span>
        </Col>
      </Row>
    );
  }
}

export default Property;
