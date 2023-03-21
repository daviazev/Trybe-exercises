-- 3. 🚀 Escreva uma query que exiba a média salarial de cada JOB_ID, 
-- ordenando pela média salarial em ordem decrescente.

SELECT * FROM hr.employees;

SELECT job_id, AVG(salary) AS average_salary
FROM hr.employees
GROUP BY job_id
ORDER BY average_salary DESC;
