import React, { Component } from "react";
import PropTypes from "prop-types";
import Col from "react-bootstrap/esm/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import Row from "react-bootstrap/esm/Row";

class Rating extends Component {
  static propTypes = {
    rating: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Row>
        <Col>
          <FontAwesomeIcon icon={faStar} size="sm" />
          <span>
            {this.props.rating.stars} ({this.props.rating.reviews} reviews)
          </span>
        </Col>
      </Row>
    );
  }
}

export default Rating;
