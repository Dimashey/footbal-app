/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("clubs", {
    id: "id",
    club_name: {
      type: "varchar(255)",
      notNull: true,
    },
  });

  pgm.createTable("players", {
    id: "id",
    player_name: {
      type: "varchar(255)",
      notNull: true,
    },
    player_surname: {
      type: "varchar(255)",
      notNull: true,
    },
    club_id: {
      type: "integer",
      notNull: true,
    },
  });

  pgm.addConstraint(
    "players",
    "fk_players.club_id",
    "FOREIGN KEY (club_id) REFERENCES clubs (id)"
  );

  pgm.createTable("competitions", {
    id: "id",
    competition_name: {
      type: "varchar(255)",
      notNull: true,
    },
  });

  pgm.createTable("clubs_competitions_relation", {
    club_id: {
      type: "integer",
      notNull: true,
    },
    competition_id: {
      type: "integer",
      notNull: true,
    },
  });

  pgm.addConstraint(
    "clubs_competitions_relation",
    "fk_clubs_competitions_relation.club_id",
    "FOREIGN KEY (club_id) REFERENCES clubs (id)"
  );

  pgm.addConstraint(
    "clubs_competitions_relation",
    "fk_clubs_competitions_relation.competition_id",
    "FOREIGN KEY (competition_id) REFERENCES competitions (id)"
  );
};

exports.down = (pgm) => {
  pgm.dropTable("clubs");
  pgm.dropTable("players");
  pgm.dropTable("competitions");
  pgm.dropTable("ClubsCompetitionsRelation");
};
