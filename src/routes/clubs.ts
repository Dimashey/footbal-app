import { Router } from "express";
import { clubsController } from "../controllers";

const clubsRouter = Router();

clubsRouter.get("/:id", clubsController.getClub);

export { clubsRouter };
