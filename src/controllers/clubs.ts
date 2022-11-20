import { Request, Response } from "express";
import { clubsService } from "../services";

class ClubsController {
  async getClub(req: Request, res: Response) {
    const { id } = req.params;

    const club = await clubsService.getClub(id);

    res.json(club);
  }
}

export const clubsController = new ClubsController();
