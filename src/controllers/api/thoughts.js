const getAllThoughts = (req, res) => {
  res.send("getAllThoughts");
};

const getThoughtById = (req, res) => {
  res.send("getThoughtById");
};

const createANewThought = (req, res) => {
  res.send("createANewThought");
};

const updateAThought = (req, res) => {
  res.send("updateAThought");
};

const deleteAThought = (req, res) => {
  res.send("deleteAThought");
};

module.exports = {
  getAllThoughts,
  getThoughtById,
  createANewThought,
  updateAThought,
  deleteAThought,
};
