-- código feito durante a aula 

USE sakila;

SELECT title FROM film
WHERE rating = 'NC-17';

SELECT title FROM film
WHERE rental_duration = 6;

SELECT * FROM film
WHERE length > 100
ORDER BY length;

SELECT * FROM film
WHERE replacement_cost <= 22.99
ORDER BY replacement_cost;

SELECT * FROM actor
WHERE NOT last_name = 'NEESON'
ORDER BY first_name, last_name;

SELECT * FROM customer
WHERE active IS FALSE;

SELECT * FROM film
WHERE rating = 'G' 
AND replacement_cost < 20
AND length <= 100;

SELECT * FROM film
WHERE rating = 'G' OR replacement_cost < 20;

SELECT * FROM film
WHERE title LIKE '%ES'; 

SELECT * FROM film
WHERE title LIKE '%at%'; 

SELECT * FROM actor
WHERE first_name LIKE 'sa%dra'; 

SELECT * FROM actor
WHERE first_name LIKE 'jo%'; 

SELECT * FROM actor
WHERE first_name LIKE '___%se';

SELECT * FROM actor
WHERE first_name LIKE 'E____';

SELECT * FROM actor
WHERE first_name LIKE '_ll__';

SELECT * FROM actor
WHERE first_name 
IN ('Jennifer', 'Matthew', 'Johnny');

SELECT * FROM film
WHERE length BETWEEN 62 AND 102;

SELECT * FROM payment
WHERE payment_date BETWEEN '2005-05-01' AND '2005-05-31'
ORDER BY payment_date;
