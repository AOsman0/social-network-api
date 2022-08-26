const { Router } = require("express");

const {
  createAFriend,
  deleteAFriend,
} = require("../../controllers/api/friends");

const router = Router();


router.post("/", createAFriend);
router.delete("/:id", deleteAFriend);

module.exports = router;
