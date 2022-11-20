import { Request, Response } from "express";
import { competitionsService } from "../services/competitions";

class CompetitionsController {
  async getCompetition(req: Request, res: Response) {
    const { id } = req.params;

    const competition = await competitionsService.getCompetition(id);

    return res.json(competition);
  }

  async getClubs(req: Request, res: Response) {
    const { id } = req.params;

    const clubs = await competitionsService.getClubs(id);

    return res.json(clubs);
  }

  async getPlayers(req: Request, res: Response) {
    const { id } = req.params;

    const players = await competitionsService.getPlayers(id);

    return res.json(players);
  }
}

export const competitionsController = new CompetitionsController();
