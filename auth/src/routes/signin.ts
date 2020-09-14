import express from "express";

const router = express.Router();

router.post("/api/users/signin", (req, res) => {
  res.send("Hi there. This is the sign in router.");
});

export { router as signInRouter };
