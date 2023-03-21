/*
Os resultados de uma query podem ser agrupados por uma ou mais colunas usando o GROUP BY, 
o que faz com que todos os registros que têm o mesmo valor para tais colunas sejam exibidos 
juntos. O GROUP BY também pode ser usado em conjunto com as funções de agregação que vimos anteriormente.

O GROUP BY pode ser construído da seguinte forma:
*/

SELECT coluna(s) FROM tabela
GROUP BY coluna(s);

-- Podemos utilizar o GROUP BY para agrupar os registros pelo valor de uma coluna, 
-- exibindo apenas um registro de cada valor, como é feito com a coluna first_name a seguir.

SELECT first_name FROM sakila.actor
GROUP BY first_name; -- 128 linhas retornadas

/*
	Se você executar a query anterior no seu banco de dados sakila, verá que são retornados 
	128 resultados. Porém, se retirar o GROUP BY, como na query abaixo, notará que existem 200 
	registros na tabela actor. Isso acontece pelo fato de ele agrupar todos os registros que 
	possuem o mesmo first_name, evitando duplicações na hora de retornar os dados.
*/

SELECT first_name FROM sakila.actor; -- 200 linhas retornadas

/*
	Como dito, o GROUP BY removerá duplicações, retornando apenas um valor da coluna usada no agrupamento.

	Porém, é mais comum utilizar o GROUP BY em conjunto com o AVG, MIN, MAX, SUM ou COUNT. 
    
	Por exemplo, caso queiramos saber quantos registros existem na tabela de cada nome registrado,
	podemos usar o COUNT(). Assim, teremos uma informação mais fácil de ser compreendida.
*/

SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

/*
	Tendo visto isso, agora vamos explorar como utilizar o GROUP BY em conjunto com as diversas 
	funções de agregação que foram estudadas até aqui, por meio de alguns exemplos feitos com o nosso banco de dados sakila.
*/

-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;

/*
	Praticando GROUP BY

	Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer 
	que estão ativos e a quantidade que estão inativos.
*/

SELECT active, COUNT(active) FROM sakila.customer
GROUP BY active;


/*
	Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes 
	ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos 
	clientes (ativos ou inativos) e a quantidade de clientes por status.
*/

SELECT store_id, active, COUNT(*) FROM sakila.customer
GROUP BY store_id, active;

/*
	Monte uma query que exiba a média de duração de locação por classificação 
	indicativa (rating) dos filmes cadastrados na tabela sakila.film. Os resultados 
	devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
*/

SELECT rating, AVG(rental_duration) 'avg_rental_duration'
FROM sakila.film
GROUP BY rating 
ORDER BY avg_rental_duration DESC;

/*
	Monte uma query para a tabela sakila.address que exiba o nome do distrito e a
	quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
*/

SELECT district, COUNT(address) AS address_by_district
FROM sakila.address
GROUP BY district
ORDER BY address_by_district DESC;

/*
	Filtrando Resultados do GROUP BY com HAVING

	Podemos usar o HAVING para filtrar resultados agrupados, assim como usamos 
	o SELECT...WHERE para filtrar resultados individuais.

	A query a seguir busca o nome e a quantidade de nomes cadastrados na tabela 
	sakila.actor e os agrupa por quantidade. Por fim, filtramos os resultados 
	agrupados usando o HAVING, para que somente os nomes que estão cadastrados 
	mais de duas vezes sejam exibidos.

	O HAVING acontece por último na execução da consulta, de modo que primeiro 
	são calculados os agrupamentos, e apenas depois disso são filtrados os que 
	não satisfazem as condições da cláusula HAVING

	Em uma aplicação real de troca de mensagens, por exemplo, pode ser preciso 
	identificar as pessoas que utilizam o sistema e enviaram mais de 1000 
	mensagens por hora, caracterizando o SPAM de acordo com a regra de negócio
	da empresa. Assim, o HAVING te permitirá fazer essa consulta filtrando 
	esse dado que foi agrupado com o uso do COUNT.
*/

SELECT first_name, COUNT(*)
FROM sakila.actor
GROUP BY first_name
HAVING COUNT(*) > 2;

-- Ou, melhor ainda, usando o AS para dar nomes às colunas de agregação,
-- melhorando a leitura do resultado
SELECT first_name, COUNT(*) AS nomes_cadastrados
FROM sakila.actor
GROUP BY first_name
HAVING nomes_cadastrados > 2;

-- Observação: o alias não funciona com strings para o HAVING,
-- então use o underline ("_") para separar palavras
-- Ou seja, o exemplo abaixo não vai funcionar
SELECT first_name, COUNT(*) AS 'nomes cadastrados'
FROM sakila.actor
GROUP BY first_name
HAVING 'nomes cadastrados' > 2;

-- É importante entender que, quando usamos o HAVING, estamos filtrando 
-- somente os resultados gerados após o GROUP BY ter sido executado.

-- Para fixar

/*
	Usando a query a seguir, modifique-a de forma que exiba apenas as durações 
	médias que estão entre 115.0 a 121.50. Além disso, dê um alias (apelido) 
	à coluna gerada por AVG(length), de forma que deixe a query mais legível. 
	Finalize ordenando os resultados de forma decrescente.
    
    SELECT rating, AVG(length)
	FROM sakila.film
	GROUP BY rating;
*/

SELECT rating, AVG(length) AS duracao_media
FROM sakila.film
GROUP BY rating
HAVING duracao_media BETWEEN 115.5 AND 121.50
ORDER BY duracao_media DESC;

/*
	Usando a query a seguir, exiba apenas os valores de total do custo de substituição 
	que estão acima de $3950.50. Dê um alias que faça sentido para SUM(replacement_cost),
	de forma que deixe a query mais legível. Finalize ordenando os resultados de forma crescente.

	SELECT rating, SUM(replacement_cost)
	FROM sakila.film
	GROUP by rating;
*/

SELECT rating, SUM(replacement_cost) AS custo_de_substituicao
FROM sakila.film
GROUP by rating
HAVING custo_de_substituicao > 3950.50
ORDER BY custo_de_substituicao;
