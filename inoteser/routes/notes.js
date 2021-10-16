const express = require("express");
const fetchu = require("../middleware/fetchuser");
const { body, validationResult } = require("express-validator");
const Notes = require("../models/Notes");
const router = express.Router();
router.get("/fetchanotes", fetchu, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user});
    res.json(notes);
  } catch (err) {
    console.error(err);
  }
});
router.post(
  "/createn",
  [
    body("title", "enter a valid title").exists(),
    body("desc", "enter a valid title").exists(),
    body("topic", "enter a valid topic").isLength({min:3,max:10}),
    body("desc", "enter a valid title").exists()
  ],
  fetchu,
  async (req, res) => {
    errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note = new Notes({
      title: req.body.title,
      description: req.body.desc,
      topic: req.body.topic,
      user: req.user,
    });
    note.save();
    res.json({ status: "Succesful" });
  }
);
router.post(
  "/updaten",
  [
    body("title", "Enter a valid title").exists(),
    body("desc", "Enter a valid title").exists(),
    body("topic", "Enter a valid topic").isLength({min:3,max:10}),
    body("id", "Enter a valid id").exists(),
  ],
  fetchu,
  async (req, res) => {
    errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note = await Notes.findOne({
      _id: req.body.id,
      user: req.user,
    }).select("-user");
    if (!note) {
      return res.status(404).json({ error: "Not Found" });
    }
    await Notes.updateOne(
      { _id: req.body.id, user: req.user },
      {
        title: req.body.title,
        description: req.body.desc,
        topic: req.body.topic,
      }
    );
    res.json(
      await Notes.findOne({ _id: req.body.id, user: req.user }).select("-user")
    );
  }
);
router.delete("/deleten/:id", fetchu, async (req, res) => {
  const note = await Notes.findOne({
    _id: req.params.id,
    user: req.user,
  }).select("-user");
  if (!note) {
    return res.status(404).json({ error: "Not Found" });
  }
  await Notes.deleteOne({ _id: req.params.id, user: req.user });
  res.json({ status: "Succesful" });
});
module.exports = router;
