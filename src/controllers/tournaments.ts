import { Request, Response } from "express";

class TournamentsController {
  async getTournament(_: Request, res: Response) {
    return res.json({ name: "Liga BBVA" });
  }
}

export const tournamentController = new TournamentsController();
