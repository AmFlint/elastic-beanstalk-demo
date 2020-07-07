module.exports = {
  "up": async function(connection, cb) {
      await connection.query(`CREATE TABLE IF NOT EXISTS dogs (
        id INT AUTO_INCREMENT,
        name VARCHAR(255) NOT NULL,
        owner_id INT NOT NULL,
        PRIMARY KEY (id)
      );`);
      await connection.query(`CREATE TABLE IF NOT EXISTS owners (
        id INT AUTO_INCREMENT,
        firstname VARCHAR(255) NOT NULL,
        lastname VARCHAR(255) NOT NULL,
        PRIMARY KEY (id)
      );`);
      await connection.query(`INSERT INTO owners (id, firstname, lastname) VALUES(1, 'antoine', 'masselot'), (2, 'gregoire', 'leroy'), (3, 'alex', 'mottier'), (4, 'sacha', 'ifrah');`);
      await connection.query(`INSERT INTO dogs (name, owner_id) VALUES('toto', 1), ('gregouille', 2), ('rex', 3), ('flower', 4), ('minnie', 1), ('donald', 2);`);


      cb();
  },
  "down": "DROP TABLE `messages`;"
}