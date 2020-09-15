import express, { Request, Response } from "express";
import { body, validationResult } from "express-validator";
import { RequestValidationError } from "../errors/request-validation-error";
import { DatabaseConnectionError } from "../errors/database-connection-error";

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
  async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      throw new RequestValidationError(errors.array());
    }

    const { email, password } = req.body;

    console.log("creating a user....");
    throw new DatabaseConnectionError();

    res.send({});
  }
);

export { router as signUpRouter };
