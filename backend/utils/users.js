const users = [];

// Join user to chat
function userJoin(id, username, room, pizza, roomOwner) {
  const user = { id, username, room, pizza, roomOwner };

  users.push(user);

  return user;
}

// Get current user
function getCurrentUser(id) {
  return users.find(user => user.id === id);
}

// User leaves chat
function userLeave(id) {
  const index = users.findIndex(user => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
}

function userIsOwner(id) {
  return users.find(user => user.id === id).roomOwner;
}

// Get room users
function getRoomUsers(room) {
  return users.filter(user => user.room === room);
}

function addPizzaToUser(id, pizza) {
  console.log(id, pizza);
  const index = users.findIndex(user => user.id === id);

  console.log(index)
  if (index !== -1) {
    users[index].pizza = pizza;

  } else {
    console.log(users);
  }
}

module.exports = {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers,
  userIsOwner,
  addPizzaToUser
};
