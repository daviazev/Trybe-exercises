-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais
-- (domestic_sales) e internacionais (international_sales) de cada filme.

USE Pixar;

SELECT mo.title, bo.domestic_sales, bo.international_sales
FROM Movies AS mo
INNER JOIN BoxOffice AS bo
ON mo.id = bo.movie_id;
