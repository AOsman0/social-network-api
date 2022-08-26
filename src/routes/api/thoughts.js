const { Router } = require("express");

const reactions = require("./reaction.js");

const {
  getAllThoughts,
  getThoughtById,
  createANewThought,
  updateAThought,
  deleteAThought,
} = require("../../controllers/api/thoughts");

const router = Router();

router.get("/", getAllThoughts);
router.get("/:id", getThoughtById);
router.post("/", createANewThought);
router.put("/:id", updateAThought);
router.delete("/:id", deleteAThought);

router.use("/reactions", reactions);

module.exports = router;
