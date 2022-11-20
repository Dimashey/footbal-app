import { Request, Response } from "express";
import { playersService } from "../services/players";

class PlayersController {
  async getPlayer(req: Request, res: Response) {
    const { id } = req.params;
    const player = await playersService.getPlayer(id);

    res.json(player);
  }

  async getClub(req: Request, res: Response) {
    const { id } = req.params;
    const player = await playersService.getClub(id);

    res.json(player);
  }

  async getCompetitions(req: Request, res: Response) {
    const { id } = req.params;
    const competition = await playersService.getCompetitions(id);

    res.json(competition);
  }
}

export const playersController = new PlayersController();
