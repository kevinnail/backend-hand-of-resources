const pool = require('../utils/pool');

class Airport {
  id;
  name;
  code;
  country_code;
  elevation;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.code = row.code;
    this.country_code = row.country_code;
    this.elevation = row.elevation;
  }

  static async getAll() {
    const { rows } = await pool.query(`SELECT * FROM airports`);
    return rows.map((airports) => new Airport(airports));
  }
}
module.exports = { Airport };
