const pool = require('../lib/utils/pool');
const app = require('../lib/app');
const request = require('supertest');
const setup = require('../data/setup');

describe('customers controller', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('GET /customers should return a list of customers', async () => {
    const resp = await request(app).get('/customers');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "cc_num": "5108757699184151",
          "cust_user_nm": "ckobera0",
          "id": "1",
        },
        Object {
          "cc_num": "5048375993868172",
          "cust_user_nm": "cjersh1",
          "id": "2",
        },
        Object {
          "cc_num": "5108753611387246",
          "cust_user_nm": "tjennings2",
          "id": "3",
        },
        Object {
          "cc_num": "5108759652927378",
          "cust_user_nm": "hbisseker3",
          "id": "4",
        },
        Object {
          "cc_num": "5048371811400272",
          "cust_user_nm": "cdocket4",
          "id": "5",
        },
        Object {
          "cc_num": "5108751063017188",
          "cust_user_nm": "tsally5",
          "id": "6",
        },
        Object {
          "cc_num": "5108752124133998",
          "cust_user_nm": "eclery6",
          "id": "7",
        },
        Object {
          "cc_num": "5108751733756645",
          "cust_user_nm": "belsay7",
          "id": "8",
        },
        Object {
          "cc_num": "5048376592220609",
          "cust_user_nm": "ifallow8",
          "id": "9",
        },
        Object {
          "cc_num": "5108753866979622",
          "cust_user_nm": "cjupe9",
          "id": "10",
        },
      ]
    `);
  });

  it('/:id', async () => {
    const resp = await request(app).get('/customers/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "cc_num": "5108757699184151",
        "cust_user_nm": "ckobera0",
        "id": "1",
      }
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
