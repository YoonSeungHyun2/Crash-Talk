const users = [];

const addUser = ({ id, name, room }) => {
  name = String(name).trim().toLowerCase();
  room = String(room).trim().toLowerCase();
  console.log("addUser_data:", name, room);

  const user = { id, name, room };
  console.log(user);
  const existingUser = users.find(
    (user) => user.room === room && user.name === name
  );
  if (existingUser) {
    return { error: "Username is taken" };
  }

  users.push(user);
  return user;
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => {
  users.filter((user) => user.room === room);
};

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
