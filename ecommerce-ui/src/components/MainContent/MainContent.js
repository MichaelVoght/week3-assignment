import React, { Component } from "react";
import Product from "./Product/Product";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import items from "../../resources/data/airbnbs.json";

class MainContent extends Component {
  render() {
    const products = items.map((item, ind) => {
      return <Product handler={this.props.handler} data={item} key={ind} />;
    });

    return (
      <Container className="maincontent">
        <Row xs={3}>{products}</Row>
      </Container>
    );
  }
}

export default MainContent;
