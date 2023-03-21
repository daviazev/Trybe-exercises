-- Exercícios do dia 20.3 - usando o banco PecasFornecedores
-- O banco PecasFornecedores pode ser encontrado na mesma pasta que este arquivo!

/*
	Vamos lá! Faça uma consulta que retorne todas as peças que começam com as letras GR.

	Agora, escreva uma query para mostrar todos os fornecimentos que contenham a 
    peça com code 2. Organize o resultado por ordem alfabética de fornecedor.
    
	Em seguida, faça uma consulta para exibir as peças, preço e fornecedor 
    de todos os fornecimentos em que o código do fornecedor tenha a letra N.
    
	Avante, falta pouco! Escreva uma query para exibir todas as informações dos 
    fornecedores que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.
    
	Agora, faça uma consulta para exibir o número de empresas 
    (fornecedores) que contém a letra F no código.
    
	Quase lá! Agora escreva uma query para exibir os 
    fornecimentos onde as peças custam mais de R$15,00 e menos de 
    $40,00. Ordene os resultados por ordem crescente.
    
	Ufa! Por fim, faça uma query para exibir o 
    número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.
*/

USE PecasFornecedores;

SELECT * FROM Pecas
WHERE name LIKE 'GR%';

SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY fornecedor;

SELECT Pecas.name, preco, fornecedor, Fornecedores.name 
FROM Pecas, Vendas, Fornecimentos, Fornecedores
WHERE fornecedor LIKE '%N%';

SELECT * FROM Fornecedores
WHERE name LIKE '%ltda%'
ORDER BY name DESC;

SELECT * FROM Fornecedores
WHERE code LIKE '%F%';

SELECT * FROM Fornecimentos
WHERE Preco BETWEEN 15.00 AND 40.00
ORDER BY Preco;
-- 15/04/2018 e o dia 30/07/2019

SELECT * FROM Vendas
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-31';
