import React, { Component } from "react";
import { Form, Row, Col, Input, Button } from "reactstrap";
import Badge from "@material-ui/core/Badge";

export default class Product extends Component {
  state = { values: [{ name: null, cost: null, link: null }] };

  handleChange(i, event) {
    let values = [...this.state.values];
    const { name, value } = event.target;
    values[i][name] = value;
    this.setState({ values });
  }

  addClick() {
    this.setState((prevState) => ({
      values: [...prevState.values, { name: null, cost: null, link: null }],
    }));
  }

  removeClick(i) {
    let values = [...this.state.values];
    values.splice(-1, 1);
    this.setState({ values });
  }

  render() {
    return (
      <Form>
        <Row>
          <h4>
            <Badge color="primary">2.</Badge>
            {"  "}Product/Service
          </h4>
        </Row>
        {this.state.values.length > 0 ? (
          <Row>
            <Col md="2">Product Name</Col>
            <Col md="2">Cost</Col>
            <Col md="2">Product Link</Col>
          </Row>
        ) : (
          ""
        )}

        {this.state.values.map((el, i) => (
          <div key={i}>
            <Row>
              <Col md="2">
                <Input
                  type="text"
                  value={el.name || ""}
                  name="name"
                  placeholder="T-Shirt"
                  onChange={(e) => this.handleChange(i, e)}
                />
              </Col>
              <Col md="2">
                <Input
                  type="number"
                  value={el.cost || ""}
                  name="cost"
                  onChange={(e) => this.handleChange(i, e)}
                  placeholder="Rs. 500"
                />
              </Col>
              <Col md="2">
                <Input
                  type="text"
                  value={el.link || ""}
                  name="link"
                  placeholder="productlink.com"
                  onChange={(e) => this.handleChange(i, e)}
                />
              </Col>
            </Row>
            <br />
          </div>
        ))}
        <Row>
          <Col md="2">
            <Button
              className="button-without-border"
              outline
              color="primary"
              onClick={() => this.addClick()}
            >
              Add Products +
            </Button>
          </Col>
          <Col md="2">
            <Button
              className="button-without-border"
              outline
              color="secondary"
              onClick={() => this.removeClick()}
            >
              Remove
            </Button>
          </Col>
        </Row>
        <hr />
      </Form>
    );
  }
}
