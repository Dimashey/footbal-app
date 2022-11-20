import { Router } from "express";
import { competitionsController } from "../controllers/competitions";

const competitionsRouter = Router();

competitionsRouter.get("/:id", competitionsController.getCompetition);

export { competitionsRouter };
