-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS animals;


CREATE TABLE people(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL
);

CREATE TABLE animals(
    id  BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    sci_name VARCHAR NOT NULL
);


INSERT INTO
    people (first_name,last_name)
VALUES
('Chris','Issitt'),
('Tracy','Blees'),
('Upton','Angless'),
('Jocelyn','Romaines'),
('Constantine','Witherop'),
('Diandra','Schimek'),
('Seumas','Hallifax'),
('Reena','Crowthe'),
('Wash','Fandrich'),
('Olav','Sneezum');


INSERT INTO
    animals(name,sci_name)
VALUES
('Eastern dwarf mongoose','Helogale undulata'),
('Cape fox','Vulpes chama'),
('Tawny eagle','Anitibyx armatus'),
('Reedbuck, bohor','Redunca redunca'),
('Monitor lizard','Varanus sp.'),
('Stork, yellow-billed','Mycteria ibis'),
('Lynx, african','Felis caracal'),
('Boat-billed heron','Cochlearius cochlearius'),
('Starling, red-shouldered glossy','Lamprotornis nitens'),
('Catfish, blue','Ictalurus furcatus');

