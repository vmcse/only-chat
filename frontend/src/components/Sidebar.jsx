import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { AppContext } from "../context/appContext";

const Sidebar = () => {
  const user = useSelector((state) => state.user);

  const {
    socket,
    members,
    setMembers,
    currentRoom,
    setCurrentRoom,
    rooms,
    setRooms,
    pvtMemberMsg,
    setPvtMemberMsg,
  } = useContext(AppContext);

  socket.off("new-user").on("new-user", (payload) => {
    setMembers(payload);
  });

  if (!user) {
    return <></>;
  }
  return (
    <>
      <h2>Available Rooms</h2>
      <ListGroup>
        {rooms.map((room, i) => (
          <ListGroup.Item key={i}>{room}</ListGroup.Item>
        ))}
      </ListGroup>
      <h2>Members</h2>
      <ListGroup>
        {members.map((member) => (
          <ListGroup.Item key={member.id} style={{ cursor: "pointer" }}>
            {member.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default Sidebar;
