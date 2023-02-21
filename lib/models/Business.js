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
    if (rows.length === 0) {
      return null;
    }
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

  static async updateById(id, newAttrs) {
    const business = await Business.getById(id);
    if (!business) return null;
    const newData = { ...business, ...newAttrs };
    const { rows } = await pool.query(
      `
		UPDATE businesses
		SET name = $2, city=$3, country=$4
		WHERE id = $1
		RETURNING *;
		`,
      [id, newData.name, newData.city, newData.country]
    );
    return new Business(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
		DELETE FROM businesses
		WHERE id = $1
		RETURNING *
		`,
      [id]
    );
    return new Business(rows[0]);
  }
}

module.exports = { Business };
