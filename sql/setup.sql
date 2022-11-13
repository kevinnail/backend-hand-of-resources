-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS animals;
DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS customer_data;


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


CREATE TABLE songs(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    band VARCHAR NOT NULL,
    album VARCHAR NOT NULL,
    year BIGINT NOT NULL,
    length VARCHAR NOT NULL
);

CREATE TABLE customers(
    id  BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cust_user_nm VARCHAR NOT NULL,
    cc_num BIGINT NOT NULL
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



    INSERT INTO
        songs(name, band, album, year,length)
    VALUES

 ('Third Eye','TOOL','Aenima',1996,'13:47'),
  ('Come as You Are','Nirvana','Nevermind',1991,'3:39'),
  ('7empest','TOOL','Fear Inoculum',2019,'15:44'),
  ('Frizzle Fry','Primus','Frizzle Fry',1990,'6:04'),
  ('Heart Shaped Box','Nirvana','In Utero',1993,'4:41'),
  ('Pushit','TOOL','Aenima',1996,'9:55'),
  ('Smells Like Teen Spirit','Nirvana','Nevermind',1991,'5:01'),
  ('Here Come the Bastards','Primus','Sees of Cheese',1991,'2:55');


    INSERT INTO
        customers(cust_user_nm,cc_num)
    VALUES

  ('ckobera0','5108757699184151'),
('cjersh1','5048375993868172'),
('tjennings2','5108753611387246'),
('hbisseker3','5108759652927378'),
('cdocket4','5048371811400272'),
('tsally5','5108751063017188'),
('eclery6','5108752124133998'),
('belsay7','5108751733756645'),
('ifallow8','5048376592220609'),
('cjupe9','5108753866979622');