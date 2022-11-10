-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS people;

CREATE TABLE people(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    first_name VARCHAR NOT NULL,
    last_name VARCHAR NOT NULL
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



