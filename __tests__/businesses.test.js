const setup = require('../data/setup');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');

describe('businesses controller', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /businesses should return a list of businesses', async () => {
    const resp = await request(app).get('/businesses');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "city": "Nandayure",
          "country": "CR",
          "id": "1",
          "name": "Buzzbean",
        },
        Object {
          "city": "Ilovka",
          "country": "RU",
          "id": "2",
          "name": "Fivespan",
        },
        Object {
          "city": "Mulatupo",
          "country": "PA",
          "id": "3",
          "name": "Twimbo",
        },
        Object {
          "city": "Baimajing",
          "country": "CN",
          "id": "4",
          "name": "Riffpedia",
        },
        Object {
          "city": "Eucaliptus",
          "country": "BO",
          "id": "5",
          "name": "Kwilith",
        },
        Object {
          "city": "Rangmanten",
          "country": "ID",
          "id": "6",
          "name": "Bubblemix",
        },
        Object {
          "city": "Kristiansand S",
          "country": "NO",
          "id": "7",
          "name": "Riffpedia",
        },
        Object {
          "city": "Xiangzhou",
          "country": "CN",
          "id": "8",
          "name": "Jaxspan",
        },
        Object {
          "city": "Jardinópolis",
          "country": "BR",
          "id": "9",
          "name": "Shuffledrive",
        },
        Object {
          "city": "Superbulous",
          "country": "US",
          "id": "10",
          "name": "Fatz,Denver",
        },
      ]
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
