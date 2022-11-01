import { Router } from "express";
import { tournamentController } from "../controllers/tournaments";

const tournamentsRouter = Router();

tournamentsRouter.get("/:id", tournamentController.getTournament);

export { tournamentsRouter };
