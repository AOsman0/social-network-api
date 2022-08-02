const { Router } = require("express");

const {
  createAReaction,
  deleteAReaction,
} = require("../../controllers/api/reaction");

const router = Router();

router.post("/", createAReaction);
router.delete("/:id", deleteAReaction);

module.exports = router;
