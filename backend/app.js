const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const {
  userJoin,
  userIsOwner,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

roomNames = new Set();

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'test/index.html'))
})

// Run when client connects
io.on('connection', socket => {
  console.log('connection', socket.id);
  socket.on('getroomname', () => {
    roomName = makeid(4);

    while (!(roomNames.has(roomName))){
      roomName = makeid(4);
    }

    socket.emit(roomName);
  }) 
  socket.on('joinRoom', ({ username, room, pizza, roomOwner }) => {
    const user = userJoin(socket.id, username, room, pizza, roomOwner);

    socket.join(user.room);

    // Send users and room info
    io.to(user.room).emit('roomUsers', {
      room: user.room,
      users: getRoomUsers(user.room)
    });

    roomNames.add(user.room);
  });


  socket.on('finalize', () => {
    const user = getCurrentUser(socket.id)
    if (user.roomOwner){

      io.to(user.room).emit('finalizeOrder');
    }
  })


  // Runs when client disconnects
  socket.on('disconnect', () => {
    const user = userLeave(socket.id);
    console.log('disconnect', socket.id);
    if (user) {
      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });

      if (!getRoomUsers(user.room)){
        roomNames.delete(user.room);
      }
    }
  });
});

function makeid(length) {
  let result           = '';
  let characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersLength = characters.length;
  for ( let i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
