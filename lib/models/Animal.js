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
}

module.exports = { Animal };
