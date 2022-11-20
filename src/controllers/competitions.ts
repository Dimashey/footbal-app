import { Request, Response } from "express";
import { competitionsService } from "../services/competitions";

class CompetitionsController {
  async getCompetition(req: Request, res: Response) {
    const { id } = req.params;

    const competition = await competitionsService.getCompetition(id);

    return res.json(competition);
  }
}

export const competitionsController = new CompetitionsController();
