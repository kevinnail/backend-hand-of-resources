const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('apps controller', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('GET /apps should return a list of apps', async () => {
    const resp = await request(app).get('/apps');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "name": "1",
          "version": "0.3.7",
        },
        Object {
          "id": "2",
          "name": "2",
          "version": "0.9.3",
        },
        Object {
          "id": "3",
          "name": "3",
          "version": "6.3",
        },
        Object {
          "id": "4",
          "name": "4",
          "version": "0.8.3",
        },
        Object {
          "id": "5",
          "name": "5",
          "version": "4.0",
        },
        Object {
          "id": "6",
          "name": "6",
          "version": "0.85",
        },
        Object {
          "id": "7",
          "name": "7",
          "version": "8.5",
        },
        Object {
          "id": "8",
          "name": "8",
          "version": "7.3",
        },
        Object {
          "id": "9",
          "name": "9",
          "version": "3.6.0",
        },
        Object {
          "id": "10",
          "name": "10",
          "version": "0.3.7",
        },
      ]
    `);
  });

  afterAll(() => {
    pool.end();
  });
});
