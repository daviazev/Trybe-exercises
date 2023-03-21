-- CÓDIGO FEITO DURANTE A AULA (JUNTO COM O PROFESSOR)

USE sakila;

INSERT INTO `staff` (first_name, last_name, 
address_id, email, store_id, active, username, password)
VALUES ('Davi', 'Azevedo', 2, 'daviazev@.com', 2, false, 'daviazev', '1234');

SELECT * FROM staff
WHERE first_name = 'Davi';

INSERT INTO sakila.actor (first_name, last_name)
SELECT first_name, last_name FROM sakila.customer
WHERE first_name LIKE 'b%';


SELECT first_name, last_name FROM sakila.customer
WHERE first_name LIKE 'b%';

SELECT * FROM actor;



