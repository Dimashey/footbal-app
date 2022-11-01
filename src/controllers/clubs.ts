import { Request, Response } from "express";

class ClubsController {
  async getClub(_: Request, res: Response) {
    return res.json({ name: "Real Madrid" });
  }
}

export const clubsController = new ClubsController();
