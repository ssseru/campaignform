import React from "react";

import { Container, Row } from "reactstrap";

import CampaignInfo from "./CampaignInfoComponent";
import Deliverables from "./DeliverablesComponent";
import Product from "./ProductComponent";

class CreateCampaign extends React.Component {
  render() {
    return (
      <Container>
        <br />
        <Row>
          <h1 className="App-header">Create Campaign</h1>
        </Row>
        <CampaignInfo />
        <Product />
        <Deliverables />
      </Container>
    );
  }
}

export default CreateCampaign;
