import React, { Component } from "react";
import { Form, Row, FormGroup, Label, Col, Input } from "reactstrap";
import Badge from "@material-ui/core/Badge";

export default class CampaignInfo extends Component {
  render() {
    return (
      <Form>
        <Row>
          <h4>
            <Badge color="primary">1.</Badge>
            {"  "}Campaign Info
          </h4>
        </Row>
        <Row>
          <Col md="2">
            <FormGroup>
              <Label for="cname">Campaign Name</Label>
              <Input
                type="text"
                name="cname"
                id="cname"
                placeholder="Campaign 1.0"
              />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label for="cdescription">Campaign Description</Label>
              <Input
                type="email"
                name="cdescription
                  cdescription"
                id="cdescription"
                placeholder="Awareness Campaign"
              />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label for="cplatform">Campaign Platform</Label>
              <Input type="select" name="cplatform" id="cplatform">
                <option>Instagram</option>
                <option>Facebook</option>
                <option>Snapchat</option>
              </Input>
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label for="sdate">Start Date</Label>
              <Input type="date" name="sdate" id="sdate" />
            </FormGroup>
          </Col>
          <Col md="2">
            <FormGroup>
              <Label for="edate">End Date</Label>
              <Input type="date" name="edate" id="edate" />
            </FormGroup>
          </Col>
        </Row>
        <hr />
      </Form>
    );
  }
}
