const pool = require('../utils/pool.js');

class Animal {
  id;
  name;
  sci_name;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.sci_name = row.sci_name;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from animals');
    return rows.map((animal) => new Animal(animal));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT * FROM animals 
      WHERE id = $1
      `,
      [id]
    );
    return new Animal(rows[0]);
  }
}

module.exports = { Animal };
