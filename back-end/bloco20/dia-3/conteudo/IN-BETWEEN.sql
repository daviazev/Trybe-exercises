-- Operador IN
-- Como você viu no início do dia hoje, é possível juntar várias condições nas suas queries usando os operadores AND e OR.
-- No entanto, você ainda terá que digitar cada condição separadamente, como no exemplo a seguir:

SELECT * FROM sakila.actor
WHERE first_name = 'PENELOPE'
OR first_name = 'NICK'
OR first_name = 'ED'
OR first_name = 'JENNIFER';

-- Uma forma melhor de fazer essa mesma pesquisa seria usando o IN:

SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE', 'NICK', 'ED', 'JENNIFER');

-- Você poderia fazer esse mesmo processo para números também:

SELECT * FROM sakila.customer
WHERE customer_id IN (1,2,3,4,5);

-- Então, para que você faça pesquisas utilizando o IN, a sintaxe que deve ser usada é a seguinte:
/*
	SELECT * FROM banco_de_dados
	WHERE coluna IN (valor1, valor2, valor3, valor4, ..., valorN);
	-- ou também
	SELECT * FROM banco_de_dados
	WHERE coluna IN (expressão);
*/

-- Operador BETWEEN
-- Uma outra opção quando queremos trabalhar com faixas de resultados é o BETWEEN, 
-- que torna possível fazer pesquisas dentro de uma faixa inicial e final.

-- Note que o MySQL inclui o valor inicial e o final nos resultados
SELECT title, length FROM sakila.film
WHERE length BETWEEN 50 AND 120;

-- Usando o BETWEEN com strings
-- Para encontrar uma faixa de valores em que os valores são strings, 
-- podemos digitar a palavra por completo para encontrar os valores. Exemplo:

SELECT * FROM sakila.language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

-- Usando o BETWEEN com datas
-- Para usar o BETWEEN com datas, basta que você digite o valor no formato padrão da data, 
-- que é YYYY-MM-DD HH:MM:SS, sendo os valores de horas, minutos e segundos opcionais. 
-- No exemplo abaixo, estamos filtrando os resultados para exibir o rental_id e rental_date apenas entre o mês 05 e o mês 07:

SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';

-- Para Fixar

/*
	Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: 
    hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética.
    
	Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.
    
	Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. 
    Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia, 
    diferente do formato brasileiro, que é dia/mês/ano.
    
	Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes 
    com a duração de empréstimo de 3 a 6. Os resultados devem ser classificados em filmes com maior duração 
    de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.
    
	Monte um relatório que exiba o título e classificação dos 500 primeiros filmes 
    direcionados para as classificações indicativas G, PG e PG-13. Os resultados devem estar ordenados por título.
*/

SELECT first_name, last_name, email FROM customer
WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy')
ORDER BY first_name;

SELECT address_id, email FROM customer
WHERE address_id IN (172, 173, 174, 175, 176)
ORDER BY email;

SELECT COUNT(*) FROM payment
WHERE payment_date BETWEEN '2005/05/01' AND '2005/08/01';

SELECT title, release_year, rental_duration FROM film
WHERE rental_duration BETWEEN 3 AND 6
ORDER BY rental_duration, title;

SELECT title, rating FROM film
WHERE rating <> 'NC-17'
ORDER BY title
LIMIT 500;
