const setup = require('../data/setup');
const pool = require('../lib/utils/pool');
const request = require('supertest');
const app = require('../lib/app');

describe('businesses controller', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('GET /businesses should return a list of businesses', async () => {
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

  it.skip('GET /businesses/1 should return one business', async () => {
    const resp = await request(app).get('/businesses/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "city": "Nandayure",
        "country": "CR",
        "id": "1",
        "name": "Buzzbean",
      }
    `);
  });

  it.skip('POST /businesses should create a new business', async () => {
    const newBiz = {
      city: 'Spokane',
      country: 'US',
      name: 'Bizorific',
    };
    const resp = await request(app).post('/businesses').send(newBiz);
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newBiz,
    });
  });

  it('PUT /businesses/1 should update an existing business', async () => {
    const resp = await request(app).put('/businesses/1').send({ name: 'SuperNewBizName' });
    expect(resp.status).toBe(200);
    expect(resp.body.name).toBe('SuperNewBizName');
  });

  afterAll(() => {
    pool.end();
  });
});
