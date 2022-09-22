-- Exercício 3 Utilizando o INNER JOIN, faça uma busca que retorne os 
-- filmes e sua avaliação (rating) em ordem decrescente.

SELECT mo.title, bo.rating
FROM Movies AS mo
INNER JOIN BoxOffice AS bo
ON mo.id = bo.movie_id
ORDER BY bo.rating DESC;
