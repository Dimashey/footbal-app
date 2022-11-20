import { pool } from "../configs";
import Clubs from "../models/public/Clubs";

class ClubsService {
  async getClub(id: string): Promise<Clubs> {
    const { rows } = await pool.query<Clubs>(
      "SELECT * FROM clubs WHERE id = $1",
      [id]
    );

    return rows[0];
  }
}

export const clubsService = new ClubsService();
