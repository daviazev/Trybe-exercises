-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne 
-- todos os dados dos cinemas, mesmo os que não possuem filmes em
-- cartaz e, adicionalmente, os dados dos filmes que estão em cartaz
-- nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.

SELECT th.*, mo.id, mo.title, mo.director, mo.length_minutes
FROM Theater AS th
LEFT JOIN Movies AS mo
ON th.id = mo.theater_id
ORDER BY th.name;
