import React, { Component } from "react";
import { Form, Row, FormGroup, Label, Col, Input, Button } from "reactstrap";
import Badge from "@material-ui/core/Badge";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownAlt from "@material-ui/icons/ThumbDownAlt";

export default class Deliverables extends Component {
  state = {
    values: [{ type: null, instructions: null, dos: null, donts: null }],
  };

  handleChange(i, event) {
    let values = [...this.state.values];
    const { name, value } = event.target;
    values[i][name] = value;
    this.setState({ values });
  }

  addClick() {
    this.setState((prevState) => ({
      values: [
        ...prevState.values,
        { type: null, instructions: null, dos: null, donts: null },
      ],
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
            <Badge color="primary">3.</Badge>
            {"  "}Deliverables
          </h4>
        </Row>
        {this.state.values.map((el, i) => (
          <div key={i}>
            <Row>
              <Col md="2">
                <FormGroup>
                  <Label for="type">Deliverable Type</Label>
                  <Input
                    type="select"
                    name="select"
                    id="type"
                    value={el.type || ""}
                    onChange={(e) => this.handleChange(i, e)}
                  >
                    <option>Story</option>
                    <option>Post</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md="6">
                <FormGroup>
                  <Label for="instructions">Add Instructions</Label>
                  <Col sm={10}>
                    <Input
                      value={el.instructions || ""}
                      onChange={(e) => this.handleChange(i, e)}
                      placeholder="Add clear instructions"
                      type="textarea"
                      name="instructions"
                      id="instructions"
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label for="dos">
                    Add do's
                    <ThumbUpAltIcon />
                  </Label>
                  <Col sm={10}>
                    <Input
                      value={el.dos || ""}
                      onChange={(e) => this.handleChange(i, e)}
                      placeholder="Pre added example do's"
                      type="textarea"
                      name="dos"
                      id="dos"
                    />
                  </Col>
                </FormGroup>
              </Col>
              <Col md="3">
                <FormGroup>
                  <Label for="donts">
                    Add dont's <ThumbDownAlt />
                  </Label>
                  <Col sm={10}>
                    <Input
                      value={el.donts || ""}
                      onChange={(e) => this.handleChange(i, e)}
                      placeholder="Pre added example dont's"
                      type="textarea"
                      name="donts"
                      id="donts"
                    />
                  </Col>
                </FormGroup>
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
              Add Deliverables +
            </Button>
          </Col>
          <Col md="2">
            <Button
              className="button-without-border"
              outline
              color="secondary"
              onClick={() => this.removeClick(-1)}
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
