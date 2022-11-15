const pool = require('../utils/pool');

class Customers {
  id;
  cust_user_nm;
  cc_num;

  constructor(row) {
    this.id = row.id;
    this.cust_user_nm = row.cust_user_nm;
    this.cc_num = row.cc_num;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `
        SELECT * FROM customers
        `
    );
    return rows.map((customers) => new Customers(customers));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `
        SELECT * FROM customers
        WHERE id = $1
        `,
      [id]
    );
    if (rows.length === 0) {
      return;
    }
    return new Customers(rows[0]);
  }

  static async insert({ cust_user_nm, cc_num }) {
    const { rows } = await pool.query(
      `
        INSERT INTO 
        customers(cust_user_nm,cc_num)
        VALUES ($1,$2)
        RETURNING *
        `,
      [cust_user_nm, cc_num]
    );
    return new Customers(rows[0]);
  }

  static async updateById(id, newAttrs) {
    const customer = await Customers.getById(id);

    const newCustomer = { ...customer, ...newAttrs };
    console.log('newCustomer ', newCustomer);

    const { rows } = await pool.query(
      `
        UPDATE customers
        SET cust_user_nm = $2, cc_num = $3
        WHERE id = $1
        RETURNING *
        `,
      [id, newCustomer.cust_user_nm, newCustomer.cc_num]
    );
    return new Customers(rows[0]);
  }

  static async delete(id) {
    const { rows } = await pool.query(
      `
        DELETE FROM customers
        WHERE id = $1
        RETURNING *
        `,
      [id]
    );
    return new Customers(rows[0]);
  }
}

module.exports = { Customers };
