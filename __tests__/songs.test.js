const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app.js');

describe('songs controller', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('GET /songs should return a list of songs', async () => {
    const resp = await request(app).get('/songs');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "album": "Aenima",
          "band": "TOOL",
          "id": "1",
          "length": "13:47",
          "name": "Third Eye",
          "year": "1996",
        },
        Object {
          "album": "Nevermind",
          "band": "Nirvana",
          "id": "2",
          "length": "3:39",
          "name": "Come as You Are",
          "year": "1991",
        },
        Object {
          "album": "Fear Inoculum",
          "band": "TOOL",
          "id": "3",
          "length": "15:44",
          "name": "7empest",
          "year": "2019",
        },
        Object {
          "album": "Frizzle Fry",
          "band": "Primus",
          "id": "4",
          "length": "6:04",
          "name": "Frizzle Fry",
          "year": "1990",
        },
        Object {
          "album": "In Utero",
          "band": "Nirvana",
          "id": "5",
          "length": "4:41",
          "name": "Heart Shaped Box",
          "year": "1993",
        },
        Object {
          "album": "Aenima",
          "band": "TOOL",
          "id": "6",
          "length": "9:55",
          "name": "Pushit",
          "year": "1996",
        },
        Object {
          "album": "Nevermind",
          "band": "Nirvana",
          "id": "7",
          "length": "5:01",
          "name": "Smells Like Teen Spirit",
          "year": "1991",
        },
        Object {
          "album": "Sees of Cheese",
          "band": "Primus",
          "id": "8",
          "length": "2:55",
          "name": "Here Come the Bastards",
          "year": "1991",
        },
      ]
    `);
  });

  it.skip('GET /:id should return a single song', async () => {
    const resp = await request(app).get('/songs/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "album": "Aenima",
        "band": "TOOL",
        "id": "1",
        "length": "13:47",
        "name": "Third Eye",
        "year": "1996",
      }
    `);
  });

  it.skip('POST /songs should create a new song', async () => {
    const newSong = {
      name: 'The',
      band: 'New',
      length: 'Song',
      album: 'Of',
      year: '999',
    };

    const resp = await request(app).post('/songs').send(newSong);
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newSong,
    });
  });

  it.skip('PUT /songs/1 should update an existing song', async () => {
    const resp = await request(app).put('/songs/1').send({ name: 'New Songalicious' });
    expect(resp.status).toBe(200);
    expect(resp.body.name).toEqual('New Songalicious');
  });

  it.skip('DELETE /songs/1 should delete an existing song', async () => {
    const deleteSong = await request(app).delete('/songs/1');
    expect(deleteSong.status).toBe(200);

    const resp = await request(app).get('/songs/1');
    expect(resp.status).toBe(404);
  });

  afterAll(() => {
    pool.end();
  });
});
