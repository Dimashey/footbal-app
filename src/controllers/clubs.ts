import { Request, Response } from "express";
import { clubsService } from "../services";

class ClubsController {
  async getClub(req: Request, res: Response) {
    const { id } = req.params;

    const club = await clubsService.getClub(id);

    res.json(club);
  }

  async getPlayers(req: Request, res: Response) {
    const { id } = req.params;

    const players = await clubsService.getPlayers(id);

    res.json(players);
  }

  async getCompetitions(req: Request, res: Response) {
    const { id } = req.params;

    const competitions = await clubsService.getCompetitions(id);

    res.json(competitions);
  }
}

export const clubsController = new ClubsController();
