


const express = require("express")
const db = require('./config/db')
const app = express();
const users = require('./Routes/api/users')
const chat = require('./Routes/api/chat')
const posts = require("./Routes/api/posts")
const message = require("./Routes/api/message")
const uploadRoute = require("./Routes/api/upload");
const dotenv = require("dotenv");
const cors = require('cors');
const bodyParser = require("body-parser");
const passport = require("passport");
const http = require('http');
const socketio = require('socket.io');
const server = http.createServer(app)
const path = require("path");
dotenv.config();


const { Server } = require("socket.io");

app.use(cors({
  origin: process.env.CLIENT_URL || "*",
  credentials: true
}));

const io = new Server(server, {
  pingTimeout: 60000,
  cors: {
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST"]
  }
});


<<<<<<< HEAD
=======

>>>>>>> 2aa250d5bb470c71f3a4a3ca912227c004eea4d7
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(bodyParser.json());

<<<<<<< HEAD
app.use(cors({ origin: true }));
=======

>>>>>>> 2aa250d5bb470c71f3a4a3ca912227c004eea4d7
// Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/password')(passport);

// Routes
app.use("/api/users", users);
app.use("/api/post/", posts);
app.use("/api/chat/", chat);
app.use("/api/message/", message);
app.use("/api/upload", uploadRoute);


io.on("connection", (socket) => {
  console.log("User Connect")

  socket.on("setup", (userData) => {
    socket.join(userData.id)
    console.log(userData.id)
    socket.emit("connected")
  })

  socket.on("join chat", (room) => {
    socket.join(room)
    console.log("User Join to ROOM :  " + room)
  })

  socket.on("typing", (room) => socket.in(room).emit("typing"));
  socket.on("stop typing", (room) => socket.in(room).emit("stop typing"));
  socket.on("new message", (newMessageRecieved) => {
    var chat = newMessageRecieved.chat;

    if (!chat.users) return console.log("chat.users not defined");

    chat.users.forEach((user) => {
      if (user._id == newMessageRecieved.sender._id) return;

      socket.in(user._id).emit("message recieved", newMessageRecieved);
    });
  });

})
// --------------------------deployment------------------------------

<<<<<<< HEAD
const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/FrontEnd/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "FrontEnd", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
=======
app.get("/", (req, res) => {
  res.send("API is running...");
});
>>>>>>> 2aa250d5bb470c71f3a4a3ca912227c004eea4d7

// --------------------------deployment------------------------------

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log("Server Work in ", PORT);
})