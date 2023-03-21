USE sakila;

SET SQL_SAFE_UPDATES = 0;

SELECT * FROM film_text;

DELETE FROM film_text
WHERE title = 'ACADEMY DINOSAUR';

DELETE FROM sakila.film_actor
WHERE actor_id = 7; -- actor_id = 7 é o Id de GRACE -- agora dá pra rodar o comando abaixo!

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

SELECT * FROM actor;