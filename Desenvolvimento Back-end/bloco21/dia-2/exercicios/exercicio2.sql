-- 🚀 Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de 
-- vendas para cada filme que possui um número maior de vendas internacionais 
-- (international_sales) do que vendas nacionais (domestic_sales).

USE Pixar;

SELECT mo.title, (bo.domestic_sales + bo.international_sales) AS vendas
FROM Movies AS mo
INNER JOIN BoxOffice AS bo
ON bo.movie_id = mo.id
WHERE international_sales > domestic_sales;
