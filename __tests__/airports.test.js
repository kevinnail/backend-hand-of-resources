const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('airport controller', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('GET /airports should return a list of airports', async () => {
    const resp = await request(app).get('/airports');

    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "code": "ILY",
          "country_code": "GB",
          "elevation": "56",
          "id": "1",
          "name": "Islay Airport",
        },
        Object {
          "code": "LBU",
          "country_code": "MY",
          "elevation": "101",
          "id": "2",
          "name": "Labuan Airport",
        },
        Object {
          "code": "SOV",
          "country_code": "US",
          "elevation": "29",
          "id": "3",
          "name": "Seldovia Airport",
        },
        Object {
          "code": "NWT",
          "country_code": "PG",
          "elevation": "2040",
          "id": "4",
          "name": "Nowata Airport",
        },
        Object {
          "code": "YMT",
          "country_code": "CA",
          "elevation": "1270",
          "id": "5",
          "name": "Chapais Airport",
        },
        Object {
          "code": "FLF",
          "country_code": "DE",
          "elevation": "131",
          "id": "6",
          "name": "Flensburg-Schäferhaus Airport",
        },
        Object {
          "code": "YHD",
          "country_code": "CA",
          "elevation": "1354",
          "id": "7",
          "name": "Dryden Regional Airport",
        },
        Object {
          "code": "WAC",
          "country_code": "ET",
          "elevation": "4200",
          "id": "8",
          "name": "Waca Airport",
        },
        Object {
          "code": "GDQ",
          "country_code": "ET",
          "elevation": "6449",
          "id": "9",
          "name": "Gonder Airport",
        },
        Object {
          "code": "MDA",
          "country_code": "US",
          "elevation": "674",
          "id": "10",
          "name": "Martindale Army Heliport",
        },
      ]
    `);
  });

  it('/airports/1 should return a single airport with details', async () => {
    const resp = await request(app).get('/airports/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: '1',
      name: 'Islay Airport',
      code: 'ILY',
      country_code: 'GB',
      elevation: '56',
    });
  });

  afterAll(() => {
    pool.end();
  });
});
