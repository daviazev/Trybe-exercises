-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.

SELECT last_name, hire_date FROM hr.employees
WHERE hire_date BETWEEN '1987-07-01' AND '1987-07-31';
