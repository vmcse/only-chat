import React from "react";
import { ListGroup } from "react-bootstrap";

const Sidebar = () => {
  const rooms = ["frnuifjern", "ferfe", "ewfwef"];
  return (
    <>
      <h2>Available Rooms</h2>
      <ListGroup>
        {rooms.map((room, i) => (
          <ListGroup.Item key={i}>{room}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Members</h2>
    </>
  );
};

export default Sidebar;
