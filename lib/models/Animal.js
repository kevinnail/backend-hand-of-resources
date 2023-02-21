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

  static async getById(id) {
    const { rows } = await pool.query(
      `
      SELECT * FROM animals 
      WHERE id = $1
      `,
      [id]
    );
    if (rows.length === 0) {
      return null;
    }
    return new Animal(rows[0]);
  }

  static async insert({ name, sci_name }) {
    const { rows } = await pool.query(
      `
    INSERT INTO animals (name, sci_name)
    VALUES ($1, $2)
    RETURNING *
    `,
      [name, sci_name]
    );
    return new Animal(rows[0]);
  }

  static async updateById(id, newAttrs) {
    const animal = await Animal.getById(id);

    const newData = { ...animal, ...newAttrs };
    const { rows } = await pool.query(
      `
  UPDATE animals
  SET name = $2, sci_name = $3
  WHERE id = $1
  RETURNING *;
  `,
      [id, newData.name, newData.sci_name]
    );
    return new Animal(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
    DELETE FROM animals
    WHERE id = $1
    RETURNING *
    `,
      [id]
    );
    return new Animal(rows[0]);
  }
}
module.exports = { Animal };
