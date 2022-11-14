const pool = require('../utils/pool');

class Business {
  id;
  name;
  city;
  country;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.city = row.city;
    this.country = row.country;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
		SELECT * FROM businesses
		`
    );
    return rows.map((business) => new Business(business));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
		SELECT * FROM businesses
		WHERE id = $1
		`,
      [id]
    );
    return new Business(rows[0]);
  }

  static async insert({ city, country, name }) {
    const { rows } = await pool.query(
      `
		INSERT INTO businesses (city, country, name)
		VALUES ($1,$2,$3)
		RETURNING *
		`,
      [city, country, name]
    );
    return new Business(rows[0]);
  }
}

module.exports = { Business };
