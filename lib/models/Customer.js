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
}

module.exports = { Customers };
