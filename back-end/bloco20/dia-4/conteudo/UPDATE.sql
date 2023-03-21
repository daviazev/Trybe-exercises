USE sakila;

SET SQL_SAFE_UPDATES = FALSE;

UPDATE staff
SET first_name = 'Tedinho'
WHERE first_name = 'Ted maluco';

UPDATE staff
SET first_name = 'Sei la', last_name = 'Xablau'
WHERE staff_id = 1;

UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2);

UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE'
			  WHEN 2 THEN 'DAVIS'
              WHEN 3 THEN 'CAROLINE'
			ELSE first_name
END);


SELECT * FROM actor;
