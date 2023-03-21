-- 11. 🚀 Escreva uma query que atualize a coluna PHONE_NUMBER, de modo que todos os 
-- telefones iniciados por 515 agora devem iniciar com 777.

SET SQL_SAFE_UPDATES = 0;

/*
    SINTAXES 

    UPDATE table_name
    SET column1 = value1, column2 = value2, ...
    WHERE condition;

    SELECT REPLACE('SQL Tutorial', 'T', 'M');
*/

UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777') 
WHERE phone_number LIKE '515%';

SELECT phone_number FROM hr.employees;
