import { Router } from "express";
import { playersRouter } from "./players";
import { clubsRouter } from "./clubs";
import { competitionsRouter } from "./competitions";

const router = Router();

router.use("/players", playersRouter);
router.use("/clubs", clubsRouter);
router.use("/competitions", competitionsRouter);

export { router };
