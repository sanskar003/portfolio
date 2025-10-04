import { body, validationResult } from "express-validator";

const validateMessage = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Name is Required"),

  body("email")
    .trim()
    .notEmpty()
    .isEmail()
    .withMessage("A Valid Email is Required"),

  body("message")
    .trim()
    .notEmpty()
    .withMessage("A Valid Message is Required"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg });
    }
    next();
  },
];

export default validateMessage;
