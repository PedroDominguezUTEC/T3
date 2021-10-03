DROP DATABASE IF EXISTS restaurant;
CREATE DATABASE restaurant;
USE restaurant;
CREATE TABLE menu (
  nombre_plato varchar(200) NOT NULL,
  precio int NOT NULL,
  created_date datetime,
  modified_date datetime,
  PRIMARY KEY (nombre_plato)
);
INSERT INTO menu (nombre_plato, precio, created_date, modified_date)
VALUES ('Arroz chaufa', 8, '2021-10-2', '2021-10-2');
INSERT INTO menu (nombre_plato, precio, created_date, modified_date)
VALUES ('Aji de gallina', 10, '2021-10-2', '2021-10-2');
INSERT INTO menu (nombre_plato, precio, created_date, modified_date)
VALUES ('Ceviche', 12, '2021-10-2', '2021-10-2');
INSERT INTO menu (nombre_plato, precio, created_date, modified_date)
VALUES ('Fideos rojos', 10, '2021-10-2', '2021-10-2');