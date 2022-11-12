const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('people controller', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it.skip('GET /animals should return a list of all animals', async () => {
    const resp = await request(app).get('/animals');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Array [
        Object {
          "id": "1",
          "name": "Eastern dwarf mongoose",
          "sci_name": "Helogale undulata",
        },
        Object {
          "id": "2",
          "name": "Cape fox",
          "sci_name": "Vulpes chama",
        },
        Object {
          "id": "3",
          "name": "Tawny eagle",
          "sci_name": "Anitibyx armatus",
        },
        Object {
          "id": "4",
          "name": "Reedbuck, bohor",
          "sci_name": "Redunca redunca",
        },
        Object {
          "id": "5",
          "name": "Monitor lizard",
          "sci_name": "Varanus sp.",
        },
        Object {
          "id": "6",
          "name": "Stork, yellow-billed",
          "sci_name": "Mycteria ibis",
        },
        Object {
          "id": "7",
          "name": "Lynx, african",
          "sci_name": "Felis caracal",
        },
        Object {
          "id": "8",
          "name": "Boat-billed heron",
          "sci_name": "Cochlearius cochlearius",
        },
        Object {
          "id": "9",
          "name": "Starling, red-shouldered glossy",
          "sci_name": "Lamprotornis nitens",
        },
        Object {
          "id": "10",
          "name": "Catfish, blue",
          "sci_name": "Ictalurus furcatus",
        },
      ]
    `);
  });

  it.skip('GET /animals/1 should return one animal', async () => {
    const resp = await request(app).get('/animals/1');
    expect(resp.status).toBe(200);
    expect(resp.body).toMatchInlineSnapshot(`
      Object {
        "id": "1",
        "name": "Eastern dwarf mongoose",
        "sci_name": "Helogale undulata",
      }
    `);
  });

  it.skip('POST /animals should create a new animal', async () => {
    const newAnimal = {
      name: 'Big Furry Guy',
      sci_name: 'Biggus Furrigusolous',
    };
    const resp = await request(app).post('/animals').send(newAnimal);
    expect(resp.status).toBe(200);
    expect(resp.body).toEqual({
      id: expect.any(String),
      ...newAnimal,
    });
  });

  it('PUT /animals/:id should update an existing animal', async () => {
    const resp = await request(app).put('/animals/1').send({ name: 'Manimal' });

    expect(resp.status).toBe(200);
    expect(resp.body.name).toBe('Manimal');
  });

  afterAll(() => {
    pool.end();
  });
});
