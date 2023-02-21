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

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * FROM songs
        WHERE id = $1
        `,
      [id]
    );
    if (rows.length === 0) return null;
    return new Songs(rows[0]);
  }

  static async insert({ name, band, album, year, length }) {
    const { rows } = await pool.query(
      `
        INSERT INTO songs (name, band, album, year, length)
        VALUES($1,$2,$3,$4,$5)
        RETURNING *
        `,
      [name, band, album, year, length]
    );
    return new Songs(rows[0]);
  }

  static async updateById(id, newAttrs) {
    const song = await Songs.getById(id);
    if (!song) return null;
    const newData = { ...song, ...newAttrs };
    const { rows } = await pool.query(
      `
        UPDATE songs
        SET name = $2
        WHERE id = $1
        RETURNING *
        `,
      [id, newData.name]
    );
    return new Songs(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
    DELETE FROM songs
    WHERE id = $1
    RETURNING *
    `,
      [id]
    );
    return new Songs(rows[0]);
  }
}
module.exports = { Songs };
