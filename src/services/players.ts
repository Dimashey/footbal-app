import { pool } from "../configs";
import Players from "../models/public/Players";

class PlayersService {
  async getPlayer(id: string): Promise<Players> {
    const { rows } = await pool.query<Players>(
      "SELECT * FROM players WHERE id = $1",
      [id]
    );

    return rows[0];
  }
}

export const playersService = new PlayersService();
