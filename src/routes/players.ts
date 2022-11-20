import { Router } from "express";
import { playersController } from "../controllers";

const playersRouter = Router();

playersRouter.get("/:id", playersController.getPlayer);
playersRouter.get("/:id/club", playersController.getClub);
playersRouter.get("/:id/competitions", playersController.getCompetitions);

export { playersRouter };
