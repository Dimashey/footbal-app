import { Router } from "express";
import { playersRouter } from "./players";
import { clubsRouter } from "./clubs";
import { tournamentsRouter } from "./tournaments";

const router = Router();

router.use("/players", playersRouter);
router.use("/clubs", clubsRouter);
router.use("/tournaments", tournamentsRouter);

export { router };
