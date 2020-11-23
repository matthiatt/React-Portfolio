//https://www.w3schools.com/bootstrap4/bootstrap_flex.asp
//https://react-bootstrap.github.io/layout/grid/

import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./footerStyles.css";

function Footer() {
  return (
    <footer className="mt-3">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-2">
          <Col className="p-0 d-flex justify-content-end" md={12}>
            This site was made by Matthew Hiatt.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
