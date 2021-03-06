import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { validateRequest, BadRequestError } from "@mwineltickets/common";

import { User } from "../models/user";

const router = express.Router();

router.post(
  "/api/v1/users/signup",
  [
    body("email").isEmail().withMessage("Enter a valid email."),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Enter a strong password."),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password } = req.body;

    // Check if user exists.
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new BadRequestError("User with this email already exists.");
    }

    const user = User.build({ email, password });
    await user.save();

    // Generate JWT.
    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );

    // Set it on the session req object.
    req.session = {
      jwt: userJwt,
    };

    res.status(201).send(user);
  }
);

export { router as signUpRouter };
