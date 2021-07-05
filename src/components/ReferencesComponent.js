import React, { Component } from "react";
import { Form, Row, FormGroup, Label, Col, Input } from "reactstrap";
import Badge from "@material-ui/core/Badge";

import InfoIcon from "@material-ui/icons/Info";

export default class References extends Component {
  constructor(props) {
    super(props);
    this.state = { file: "", imagePreviewUrl: "" };
  }

  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log("handle uploading-", this.state.file);
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = <img src={imagePreviewUrl} alt="uploaded" />;
    } else {
      $imagePreview = (
        <div className="previewText">Please select an Image for Preview</div>
      );
    }
    return (
      <Form>
        <Row>
          <h4>
            <Badge color="primary">4.</Badge>
            {"  "}References
          </h4>
        </Row>
        <Row>
          <Row>
            <Col className="infobox">
              <InfoIcon />
              Add reference image to help influencers
            </Col>
          </Row>
          {this.state.file ? (
            <div className="imgPreview">{$imagePreview}</div>
          ) : (
            ""
          )}

          <FormGroup>
            <Col></Col>
            <Col>
              <Label for="image" className="btn but">
                <p>Add Image +</p>
              </Label>
              <Input
                type="file"
                className="fileInput"
                name="image"
                style={{ visibility: "hidden" }}
                id="image"
                onChange={(e) => this._handleImageChange(e)}
              />
            </Col>
          </FormGroup>
        </Row>
      </Form>
    );
  }
}
