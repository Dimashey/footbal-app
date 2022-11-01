import { Request, Response } from "express";

class PlayersController {
  async getPlayer(_: Request, res: Response) {
    return res.json({ name: "Karim Benzema" });
  }
}

export const playersController = new PlayersController();
