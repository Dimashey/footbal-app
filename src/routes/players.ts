import { Router } from "express";
import { playersController } from "../controllers";

const playersRouter = Router();

playersRouter.get("/:id", playersController.getPlayer);

export { playersRouter };
