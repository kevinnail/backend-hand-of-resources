const { version } = require('prettier');
const pool = require('../utils/pool');

class App {
  id;
  name;
  version;
  app_it_bundle;

  constructor(row) {
    this.id = row.id;
    this.name = row.id;
    this.version = row.version;
    this.app_it_bundle = row.app_it_bundle;
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
}

module.exports = { App };