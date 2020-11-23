import React from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Jumbo(props) {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        {/* py is a padding setting for vertical use. */}
        <Row className="justify-content-center py-4">
          <Col md={12} sm={8}>
            {props.mainTitle && (
              <h1 className="display-6 font-weight-bolder">
                {props.mainTitle}
              </h1>
            )}
            {/* Making the text smaller as I go down the humbotron on what I want to display as my messages. */}
            {props.scdTitle && (
              <h3 className="display-10 font-weight-light">{props.scdTitle}</h3>
            )}
            {props.msg && (
              <h3 className="lead font-weight-light">{props.msg}</h3>
            )}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
}

export default Jumbo;
