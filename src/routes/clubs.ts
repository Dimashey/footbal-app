import { Router } from "express";
import { clubsController } from "../controllers";

const clubsRouter = Router();

clubsRouter.get("/:id", clubsController.getClub);
clubsRouter.get("/:id/players", clubsController.getPlayers);
clubsRouter.get("/:id/competitions", clubsController.getCompetitions);

export { clubsRouter };
