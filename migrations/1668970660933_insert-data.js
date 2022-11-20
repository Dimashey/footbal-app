/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.sql(
    "INSERT INTO clubs VALUES (1, 'Real Madrid'), (2, 'Barcelona'), (3, 'Manchester United'), (4, 'Manchester City');"
  );

  pgm.sql(
    `INSERT INTO players VALUES (1, 'Karim', 'Benzema', 1),
                                    (2, 'Luka', 'Modric', 1),
                                    (3, 'Robert', 'Lewandowski', 2),
                                    (4, 'Ter', 'Stegen', 2), 
                                    (5, 'Cristiano Ronaldo', 'dos Santos Aveiro', 3),
                                    (6, 'David', 'de Gea', 3),
                                    (7, 'Erling', 'Holand', 4),
                                    (8, 'Kevin', 'de Bruyne', 4);`
  );

  pgm.sql(
    `INSERT INTO competitions VALUES (1, 'Champions League'), (2, 'Liga BBVA'), (3, 'Liga Barclays');`
  );

  pgm.sql(
    `INSERT INTO clubs_competitions_relation VALUES (1, 1), (1, 2),
                                                          (2, 1), (2, 2),
                                                          (3, 1), (3, 3),
                                                          (4, 1), (4, 3);`
  );
};
