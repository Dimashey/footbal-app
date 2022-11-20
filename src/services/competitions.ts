import { pool } from "../configs";
import Competitions from "../models/public/Competitions";

class CompetitionsService {
  async getCompetition(id: string): Promise<Competitions> {
    const { rows } = await pool.query<Competitions>(
      "SELECT * FROM competitions WHERE id = $1",
      [id]
    );

    return rows[0];
  }
}

export const competitionsService = new CompetitionsService();
