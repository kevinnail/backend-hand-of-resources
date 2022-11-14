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
}
module.exports = { Business };
