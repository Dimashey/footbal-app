import { Request, Response } from "express";
import { playersService } from "../services/players";

class PlayersController {
  async getPlayer(req: Request, res: Response) {
    const { id } = req.params;
    const player = await playersService.getPlayer(id);

    res.json(player);
  }
}

export const playersController = new PlayersController();
