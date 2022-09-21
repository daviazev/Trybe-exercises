-- Converte o texto da string para CAIXA ALTA
SELECT UCASE('oi, eu sou uma string que foi escrita em caixa baixa, mas a função UCASE me fez crescer :)');

-- Converte o texto da string para caixa baixa
SELECT LCASE('XABLAU');

-- Substitui as ocorrências de uma substring em uma string
SELECT REPLACE('Oi, eu sou uma xablau', 'xablau', 'cadeia de caracteres');

-- Retorna a parte da esquerda de uma string de acordo com o
-- número de caracteres especificado

SELECT LEFT ('Hi, I am a string', 3);

-- Retorna a parte da direita de uma string de acordo com o
-- número de caracteres especificado
SELECT RIGHT('Oi, eu sou uma string', 6);

-- Exibe o tamanho, em caracteres, da string, a função LENGTH retorna o tamanho em bytes
SELECT CHAR_LENGTH('Oi, eu sou uma string');

-- Extrai parte de uma string de acordo com o índice de um caractere inicial
-- e a quantidade de caracteres a extrair
SELECT SUBSTRING('Oi, eu sou uma string', 10, 2);

-- Se a quantidade de caracteres a extrair não for definida,
-- então a string será extraída do índice inicial definido, até o seu final
SELECT SUBSTRING('Oi, eu sou uma string', 11);

/*
	Para fixar melhor, que tal explorar na prática o que cada comando faz? 
    Execute cada um deles no MySQL Workbench e veja os resultados.

	Algo importante a se notar sobre strings em SQL é que, diferente de várias 
    linguagens de programação, no SQL, as strings são indexadas a partir do 
    índice 1 e não do índice 0. Caso tenha resultados inesperados, essa pode ser uma das razões.

	Observe que, apesar de ter usado strings temporárias nos exemplos acima, 
    também é possível fazer essas operações diretamente nas colunas de uma tabela.

	Para testar, execute o código abaixo no seu ambiente local. 
    Brinque com as linhas a seguir e depois volte aqui.
*/

SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

/*
	Para fixar
	Agora, vamos fixar os aprendizados com alguns desafios:

	Faça uma query que exiba a palavra 'trybe' em CAIXA ALTA.
    
	Faça uma query que transforme a frase 'Você já ouviu falar do DuckDuckGo?' em 'Você já ouviu falar do Google?'.
    
	Utilizando uma query, encontre quantos caracteres temos em 'Uma frase qualquer'.
    
	Extraia e retorne apenas a palavra “JavaScript” da frase 'A linguagem JavaScript está entre as mais usadas'.
    
	Por fim, padronize a string 'RUA NORTE 1500, SÃO PAULO, BRASIL' para que suas informações estejam todas em caixa baixa.
*/

SELECT UCASE('trybe');

SELECT REPLACE ('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo' ,'Google');

SELECT CHAR_LENGTH('Uma frase qualquer');

SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);

SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');