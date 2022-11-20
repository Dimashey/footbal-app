import { pool } from "../configs";
import Competitions from "../models/public/Competitions";

type Player = {
  player: string;
};

type Club = {
  club_name: string;
};

class CompetitionsService {
  async getCompetition(id: string): Promise<Competitions> {
    const { rows } = await pool.query<Competitions>(
      "SELECT * FROM competitions WHERE id = $1",
      [id]
    );

    return rows[0];
  }

  async getClubs(id: string): Promise<Club[]> {
    const { rows } = await pool.query<Club>(
      `
                      SELECT 
                        clubs.club_name
                      FROM competitions
                        JOIN clubs_competitions_relation ON clubs_competitions_relation.competition_id = competitions.id
                        JOIN clubs ON clubs_competitions_relation.club_id = clubs.id
                      WHERE competitions.id = $1;
                      `,
      [id]
    );

    return rows;
  }

  async getPlayers(id: string): Promise<Player[]> {
    const { rows } = await pool.query<Player>(
      `
                      SELECT 
                        CONCAT(players.player_name, ' ', players.player_surname) as player
                      FROM competitions
                        JOIN clubs_competitions_relation ON competitions.id = clubs_competitions_relation.competition_id
                        JOIN clubs ON clubs.id = clubs_competitions_relation.club_id
                        JOIN players ON clubs.id = players.club_id
                      WHERE competitions.id = $1
                      `,
      [id]
    );

    return rows;
  }
}

export const competitionsService = new CompetitionsService();
