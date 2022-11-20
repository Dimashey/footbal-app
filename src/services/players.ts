import { pool } from "../configs";
import Players from "../models/public/Players";

type Club = {
  club_name: string;
};

type Competition = {
  competition_name: string;
};

class PlayersService {
  async getPlayer(id: string): Promise<Players> {
    const { rows } = await pool.query<Players>(
      "SELECT * FROM players WHERE id = $1",
      [id]
    );

    return rows[0];
  }

  async getClub(id: string): Promise<Club> {
    const { rows } = await pool.query<Club>(
      `SELECT 
                          clubs.club_name
                        FROM players 
                          JOIN clubs ON players.club_id = clubs.id
                        WHERE players.id = $1`,
      [id]
    );

    return rows[0];
  }

  async getCompetitions(id: string): Promise<Competition[]> {
    const { rows } = await pool.query<Competition>(
      `SELECT 
                          competitions.competition_name
                        FROM players 
                          JOIN clubs ON players.club_id = clubs.id
                          JOIN clubs_competitions_relation ON clubs.id = clubs_competitions_relation.club_id
                          JOIN competitions ON competitions.id = clubs_competitions_relation.competition_id
                        WHERE players.id = $1`,
      [id]
    );

    return rows;
  }
}

export const playersService = new PlayersService();
