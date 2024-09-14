"use client";
import { useAppSelector } from "@/Redux/Hooks";
import { Col, Container, Row } from "reactstrap";

const Footer = () => {
  const { sidebar } = useAppSelector((store) => store.LayoutReducer);
  return (
    <div>
      <footer className={`footer ${sidebar && "open"}`}>
        <Container fluid>
          <Row>
            <Col md="6" className="footer-copyright">
              <p className="mb-0">Copyright 2022 © Multikart All rights reserved.</p>
            </Col>
            <Col md="6">
              <p className="pull-right mb-0">
                Hand crafted & made with<i className="fa fa-heart"></i>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
