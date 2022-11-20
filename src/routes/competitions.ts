import { Router } from "express";
import { competitionsController } from "../controllers/competitions";

const competitionsRouter = Router();

competitionsRouter.get("/:id", competitionsController.getCompetition);
competitionsRouter.get("/:id/players", competitionsController.getPlayers);
competitionsRouter.get("/:id/clubs", competitionsController.getClubs);

export { competitionsRouter };
