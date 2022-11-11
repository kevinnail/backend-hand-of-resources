const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
// const { request } = require('../lib/app.js');
const request = require('supertest');
const app = require('../lib/app');

describe('people controller', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('GET /people should return a list of all the people', async () => {
    const resp = await request(app).get('/people');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "first_name": "Chris",
          "id": "1",
          "last_name": "Issitt",
        },
        Object {
          "first_name": "Tracy",
          "id": "2",
          "last_name": "Blees",
        },
        Object {
          "first_name": "Upton",
          "id": "3",
          "last_name": "Angless",
        },
        Object {
          "first_name": "Jocelyn",
          "id": "4",
          "last_name": "Romaines",
        },
        Object {
          "first_name": "Constantine",
          "id": "5",
          "last_name": "Witherop",
        },
        Object {
          "first_name": "Diandra",
          "id": "6",
          "last_name": "Schimek",
        },
        Object {
          "first_name": "Seumas",
          "id": "7",
          "last_name": "Hallifax",
        },
        Object {
          "first_name": "Reena",
          "id": "8",
          "last_name": "Crowthe",
        },
        Object {
          "first_name": "Wash",
          "id": "9",
          "last_name": "Fandrich",
        },
        Object {
          "first_name": "Olav",
          "id": "10",
          "last_name": "Sneezum",
        },
      ]
    `);
  });

  it('GET /people/1 should return the details of one person', async () => {
    const resp = await request(app).get('/people/1');
    expect(resp.status).toEqual(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "first_name": "Chris",
        "id": "1",
        "last_name": "Issitt",
      }
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
