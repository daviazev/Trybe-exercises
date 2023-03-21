-- 10. 🚀 Escreva um query que exiba média salarial e o número de funcionários de todos os 
-- departamentos com mais de dez funcionários. Dica: agrupe pelo DEPARTMENT_ID..

SELECT  department_id, ROUND(AVG(salary), 2) AS average_salary, 
COUNT(*) AS employees_qtt
FROM hr.employees
GROUP BY department_id
HAVING employees_qtt > 10;

