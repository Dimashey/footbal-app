import { pool } from "../configs";
import Clubs from "../models/public/Clubs";

type Player = {
  id: string;
  player: string;
};

type Competition = {
  competition_name: string;
};

class ClubsService {
  async getClub(id: string): Promise<Clubs> {
    const { rows } = await pool.query<Clubs>(
      "SELECT * FROM clubs WHERE id = $1",
      [id]
    );

    return rows[0];
  }

  async getPlayers(id: string): Promise<Player[]> {
    const { rows } = await pool.query<Player>(
      `SELECT 
                        players.id, 
                        CONCAT(players.player_name, ' ', players.player_surname) as player
                      FROM clubs LEFT JOIN players ON clubs.id = players.club_id
                      WHERE clubs.id = $1`,
      [id]
    );

    return rows;
  }

  async getCompetitions(id: string): Promise<Competition[]> {
    const { rows } = await pool.query(
      `SELECT 
                        competitions.competition_name
                      FROM clubs 
                        JOIN clubs_competitions_relation 
                            ON clubs.id = clubs_competitions_relation.club_id
                        JOIN competitions 
                            ON clubs_competitions_relation.competition_id = competitions.id
                      WHERE clubs.id = $1`,
      [id]
    );

    return rows;
  }
}

export const clubsService = new ClubsService();
