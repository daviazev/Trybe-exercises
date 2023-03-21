-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (IT_PROG).

SELECT job_id, AVG(salary) AS average_salary
FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY average_salary DESC;
