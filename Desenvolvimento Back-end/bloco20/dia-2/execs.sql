-- Estes são os exercícios feitos no dia 20;
-- Cada linha corresponde a um exercício!!!

USE Scientists;
-- SELECT "This is SQL Exercise, Practice and Solution";
-- SELECT 1 as 'one', 2 as 'two', 3 as 'three';
-- SELECT 10 + 15 AS '10 + 15 = ';
-- SELECT 10*5-8; 
-- SELECT * FROM Scientists;
-- SELECT name AS 'nome_do_projeto', hours AS 'tempo_de_trabalho' FROM Projects;
-- SELECT name FROM Scientists ORDER BY name;
-- SELECT name FROM Scientists ORDER BY name DESC;

-- O projeto name precisou de hours horas para ser concluído.

-- SELECT CONCAT('O projeto', name, ' precisou de', hours, 'para ser concluído') AS resultado FROM Projects;
-- SELECT * FROM Projects ORDER BY hours DESC LIMIT 3;
-- SELECT DISTINCT project FROM AssignedTo;
-- SELECT * FROM Projects ORDER BY hours DESC LIMIT 1;
-- SELECT * FROM Projects ORDER BY hours DESC LIMIT 1 OFFSET 1;
-- SELECT * FROM Projects ORDER BY hours LIMIT 5;
-- SELECT CONCAT('Existem ', COUNT(name), ' cientistas na tabela Scientists') AS 'result' FROM Scientists;