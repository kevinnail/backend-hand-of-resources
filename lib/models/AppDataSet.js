const pool = require('../utils/pool');

class App {
  id;
  name;
  version;
  app_id_bundle;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.version = row.version;
    this.app_id_bundle = row.app_id_bundle;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
        SELECT * FROM apps
        `
    );
    return rows.map((apps) => new App(apps));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * FROM apps
        WHERE id = $1
        `,
      [id]
    );
    return rows.map((app) => new App(app));
  }

  static async insert({ name, version, app_id_bundle }) {
    const { rows } = await pool.query(
      `
          INSERT INTO apps (name, version, app_id_bundle)
          VALUES ($1,$2,$3)
          RETURNING *
          `,
      [name, version, app_id_bundle]
    );
    return new App(rows[0]);
  }
}

module.exports = { App };
