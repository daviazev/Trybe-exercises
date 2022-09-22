-- 18: 🚀 Escreva uma query que exiba as seguintes informações de cada funcionário:
-- nome, sobrenome, tempo que trabalha na empresa (em dias).

SELECT CONCAT(first_name, ' ', last_name) AS full_name, 
DATEDIFF(NOW(), hire_date) AS 'days_worked'
FROM hr.employees;
