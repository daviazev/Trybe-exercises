# CONTEÚDO DE INSERT - DIA 20.4

USE sakila;

INSERT INTO staff (first_name, last_name, address_id, store_id, username) VALUES 
('Ted', 'Doguineo', 3, 2, 'tedazev'),
('Lutero', 'Doguineo Azevedo', 3, 2, 'luterazev'),
('Tamires', 'de Oliveira Azevedo', 3, 2, 'tamidlvr');

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.staff;

INSERT INTO category (name) VALUES
('XABLAU'),
('XABLOU'),
('XABLASTES');

-- os códigos abaixo nao funfaram! ver depois por quê!

-- INSERT INTO store (manager_staff_id, address_id) VALUES
-- (3, 3);

-- INSERT INTO sakila.store (manager_staff_id, address_id)
-- VALUES (3, 3);

