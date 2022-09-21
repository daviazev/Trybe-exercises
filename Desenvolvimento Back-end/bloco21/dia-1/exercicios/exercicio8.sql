-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro 
-- necessária para cobrir a folha de pagamento das pessoas programadoras (IT_PROG).

SELECT job_id, SUM(salary) AS moneeey
FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';
