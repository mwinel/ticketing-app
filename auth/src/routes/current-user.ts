import express from "express";

const router = express.Router();

router.get("/api/users/currentuser", (req, res) => {
  res.send("Hi there. It is me Nelson.");
});

export { router as currentUserRouter };
