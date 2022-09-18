USE sakila;
-- delete cascata

-- primeiro deleta onde ela é usada como CE
DELETE FROM sakila.film_actor
WHERE actor_id = 47;
-- depois deleta a pessoa
DELETE FROM sakila.actor
WHERE actor_id = 47;

-- SELECT * FROM sakila.actor
-- WHERE first_name = 'julia';