import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import "./Home.css";

const Home = () => {
  return (
    <Row>
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div>
          <h1>fjnvejvbnehjbnvejh</h1>
          <p>vjnjervbnrhbnvrvbn</p>
          <LinkContainer to="/chat">
            <Button variant="success">
              Get Started
              <ForumRoundedIcon className="home-message-icon" />
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg"></Col>
    </Row>
  );
};

export default Home;
