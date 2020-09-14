import express from "express";

const router = express.Router();

router.post("/api/users/signout", (req, res) => {
  res.send("Hi there. This is the signout router.");
});

export { router as signOutRouter };
