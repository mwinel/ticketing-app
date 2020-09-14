import express, { Request, Response } from "express";
import { body } from "express-validator";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Enter a valid email."),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Enter a strong password."),
  ],
  (req: Request, res: Response) => {
    const { email, password } = req.body;
  }
);

export { router as signUpRouter };
