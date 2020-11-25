import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function ContentLink(props) {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col md={12}>{props.children}</Col>
      </Row>
    </Container>
  );
}

export default ContentLink;