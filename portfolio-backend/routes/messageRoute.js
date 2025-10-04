import express from "express";
import handleMessage from "../controllers/message.controller.js";
import validateMessage from "../validation/message.validation.js";
import asyncErrorHandler from "../middlewares/async.errorhandler.js";

const router = express.Router();

router.post("/", validateMessage, asyncErrorHandler(handleMessage));

export default router;
