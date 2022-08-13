const { Router } = require("express");

const {
  createAReaction,
  deleteAReaction,
} = require("../../controllers/api/reaction");

const router = Router();

router.post("/:id", createAReaction);
router.delete("/:id", deleteAReaction);

module.exports = router;
