//https://www.w3schools.com/bootstrap4/bootstrap_flex.asp

import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./footerStyles.css";

function Footer() {
  return (
    <footer className="mt-5">
      <Container fluid={true}>
        <Row className="newFooter">
          <Col className="colFooter" md={3} sm={12}>
            Matthew Hiatt
          </Col>
          <Col className="colFoot d-flex justify-content-end" md={3}>
            This site was made by Matthew Hiatt.
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
