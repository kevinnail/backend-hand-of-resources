const pool = require('../utils/pool');

class Songs {
  id;
  name;
  band;
  album;
  year;
  length;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.band = row.band;
    this.album = row.album;
    this.year = row.year;
    this.length = row.length;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
        SELECT * FROM songs
        `
    );
    return rows.map((songs) => new Songs(songs));
  }
}

module.exports = { Songs };