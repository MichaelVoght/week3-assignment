import React, { Component } from "react";
import Header from "./Header/Header";
import MainContent from "./MainContent/MainContent";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

class ECommerceApp extends Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      items: [],
    };
  }

  handler = (item) => {
    var copy = [...this.state.items];
    var ind = copy.findIndex((product) => product.propTitle === item.propTitle);
    if (ind > -1) {
      copy.splice(ind, 1);
      this.setState({
        items: copy,
      });
    } else {
      this.setState({
        items: [...this.state.items, item],
      });
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Header cart={this.state.items} />
        </Row>
        <Row>
          <MainContent handler={this.handler} />
        </Row>
      </Container>
    );
  }
}

export default ECommerceApp;
