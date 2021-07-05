import React from "react";

import { Container } from "reactstrap";
import { Form, Row, FormGroup, Label, Col, Input, Button } from "reactstrap";
import CampaignInfo from "./CampaignInfoComponent";
import Deliverables from "./DeliverablesComponent";
import Product from "./ProductComponent";
import References from "./ReferencesComponent";

class CreateCampaign extends React.Component {
  handleSubmit = () => {
    alert("form submitted!!!");
  };

  render() {
    return (
      <Container>
        <br />
        <Row>
          <h1 className="App-header">Create Campaign</h1>
        </Row>
        <Form onSubmit={this.handleSubmit}>
          <CampaignInfo />
          <Product />
          <Deliverables />
          <References />
          <Row>
            <Col md={{ size: 6, offset: 5 }}>
              <Button
                className="submit-button-without-border"
                outline
                color="success"
                type="submit"
              >
                Submit Campaign
              </Button>
            </Col>
          </Row>
          <br />
        </Form>
      </Container>
    );
  }
}

export default CreateCampaign;
