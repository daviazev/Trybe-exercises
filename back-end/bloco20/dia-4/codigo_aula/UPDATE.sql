USE sakila;

SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.film
SET release_year = 2009, language_id = 3
WHERE length > 150 AND rating = 'PG-13'
AND replacement_cost > 25;

SELECT * FROM sakila.film ORDER BY last_update;

UPDATE sakila.film
SET replacement_cost = (
    CASE
		WHEN rental_rate BETWEEN 1 AND 3 THEN 30.99
        WHEN length > 150 THEN 35.99
        WHEN length <= 82 THEN 20.33
        ELSE replacement_cost
END);

SELECT * FROM sakila.film;

SELECT * FROM sakila.staff ORDER BY last_update DESC;

UPDATE sakila.staff
SET password = 'Teste123'
WHERE active = 1
ORDER BY last_update DESC
LIMIT 3;

-- DÁ PRA ATUALIZAR COM SELECT? DÁÁA!

UPDATE sakila.city SET city = ( 
SELECT title FROM sakila.film WHERE film_id = 1
) WHERE city_id = 1;
