import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import "./MessageForm.css";

const MessageForm = () => {
  const user = useSelector((state) => state.user);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="messages-output">
        {!user && <div className="alert alert-danger">Please login</div>}
      </div>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={11}>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Your message"
                disabled={!user}
              ></Form.Control>
            </Form.Group>
          </Col>
          <Col md={1}>
            <Button
              variant="primary"
              type="submit"
              style={{ width: "100%", backgroundColor: "green" }}
              disabled={!user}
            >
              <SendRoundedIcon />
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default MessageForm;
