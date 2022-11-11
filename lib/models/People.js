const pool = require('../utils/pool');

class People {
  id;
  first_name;
  last_name;

  constructor(row) {
    this.id = row.id;
    this.first_name = row.first_name;
    this.last_name = row.last_name;
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from people');
    return rows.map((people) => new People(people));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * FROM people WHERE id = $1
        `,
      [id]
    );
    return new People(rows[0]);
  }

  static async insert({ first_name, last_name }) {
    const { rows } = await pool.query(
      `
        INSERT INTO people (first_name, last_name)
        VALUES ($1,$2)
        RETURNING *
        `,
      [first_name, last_name]
    );
    return new People(rows[0]);
  }
}

module.exports = { People };
