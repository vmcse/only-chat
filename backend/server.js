const express = require("express");
const app = express();
const userRouter = require("./controllers/userRouter");

const rooms = ["general", "tech", "finance", "crypto"];
const cors = require("cors");
const Message = require("./models/message");
const User = require("./models/user");

app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use("/users", userRouter);

require("./connection");

const server = require("http").createServer(app);
const PORT = 5001;
const io = require("socket.io")(server, {
  cors: {
    origin: "http://127.0.0.1:5173",
    methods: ["GET", "POST"],
  },
});

app.get("/rooms", (req, res) => {
  res.json(rooms);
});

const getLastMessagesFrom = async (room) => {
  let roomMessages = await Message.aggregate([
    { $match: { to: room } },
    { $group: { _id: "$date", messagesByDate: { $push: "$$ROOT" } } },
  ]);
  return roomMessages;
};

const sortRoomMessagesByDate = (messages) => {
  return messages.sort((a, b) => {
    let date1 = a._id.split("/");
    let date2 = b._id.split("/");

    date1 = date1[2] + date[0] + date1[1];
    date2 = date2[2] + date2[0] + date2[1];

    return date1 < date2 ? -1 : 1;
  });
};

io.on("connection", (socket) => {
  socket.on("new-user", async () => {
    const members = await User.find({});
    io.emit("new-user", members);
  });
  socket.on("join-room", async (room) => {
    socket.join(room);
    let roomMessages = await getLastMessagesFrom(room);
    roomMessages = sortRoomMessagesByDate(roomMessages);
    socket.event("room-messages", roomMessages);
  });
});

server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
