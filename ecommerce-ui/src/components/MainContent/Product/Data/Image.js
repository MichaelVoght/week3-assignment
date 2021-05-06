import React, { Component } from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

class Image extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };

  render() {
    return (
      <Row>
        <Col>
          <img src={this.props.url} alt={this.props.alt}></img>
        </Col>
      </Row>
    );
  }
}

export default Image;
