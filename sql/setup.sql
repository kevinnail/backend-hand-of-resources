-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS people;
DROP TABLE IF EXISTS animals;
DROP TABLE IF EXISTS songs;
DROP TABLE IF EXISTS customers;
DROP TABLE IF EXISTS businesses;
DROP TABLE IF EXISTS apps;
DROP TABLE IF EXISTS airports;


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


CREATE TABLE businesses(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    city VARCHAR NOT NULL,
    country VARCHAR NOT NULL
);

CREATE TABLE apps(
id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
name VARCHAR NOT NULL,
version VARCHAR NOT NULL,
app_id_bundle VARCHAR NOT NULL
);

CREATE TABLE airports(
    id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name VARCHAR NOT NULL,
    code VARCHAR NOT NULL,
    country_code VARCHAR NOT NULL,
    elevation BIGINT NOT NULL

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


    INSERT INTO
        businesses(name, city, country)
    VALUES


('Buzzbean','Nandayure','CR'),
('Fivespan','Ilovka','RU'),
('Twimbo','Mulatupo','PA'),
('Riffpedia','Baimajing','CN'),
('Kwilith','Eucaliptus','BO'),
('Bubblemix','Rangmanten','ID'),
('Riffpedia','Kristiansand S','NO'),
('Jaxspan','Xiangzhou','CN'),
('Shuffledrive','Jardinópolis','BR'),
('Fatz,Denver','Superbulous','US');


INSERT INTO 
        apps(name, version, app_id_bundle)
VALUES
('Tampflex','0.3.7','com.cisco.Sonair'),
('Domainer','0.9.3','com.aol.Asoka'),
('Vagram','6.3','org.unesco.Ronstring'),
('Prodder','0.8.3','com.purevolume.Pannier'),
('Fixflex','4.0','com.mediafire.Asoka'),
('Pannier','0.85','net.a8.Konklab'),
('Daltfresh','8.5','com.slate.Konklab'),
('Flowdesk','7.3','org.redcross.Ronstring'),
('Lotlux','3.6.0','au.com.smh.Greenlam'),
('Home Ing','0.3.7','net.a8.Solarbreeze');

    INSERT INTO
    airports(name,code,country_code,elevation)
    VALUES
('Islay Airport','ILY','GB','56'),
('Labuan Airport','LBU','MY','101'),
('Seldovia Airport','SOV','US','29'),
('Nowata Airport','NWT','PG','2040'),
('Chapais Airport','YMT','CA','1270'),
('Flensburg-Schäferhaus Airport','FLF','DE','131'),
('Dryden Regional Airport','YHD','CA','1354'),
('Waca Airport','WAC','ET','4200'),
('Gonder Airport','GDQ','ET','6449'),
('Martindale Army Heliport','MDA','US','674');