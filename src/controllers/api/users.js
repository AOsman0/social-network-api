const getAllUsers = (req, res) => {
  res.send("getAllUsers");
};

const getUserById = (req, res) => {
  res.send("getUserById");
};

const createANewUser = (req, res) => {
  res.send("createANewUser");
};

const updateUser = (req, res) => {
  res.send("updateUser");
};

const deleteUserById = (req, res) => {
  res.send("deleteUserById");
};

module.exports = {
  getAllUsers,
  getUserById,
  createANewUser,
  updateUser,
  deleteUserById,
};
