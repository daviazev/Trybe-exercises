-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: 
-- id, primeiro nome e ano no qual foi contratado (exiba somente o ano).

SELECT employee_id, first_name, YEAR(hire_date) FROM hr.employees;
