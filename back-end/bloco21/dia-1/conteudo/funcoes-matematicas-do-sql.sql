SELECT 5 + 5;
SELECT 5 - 5;
SELECT 5 * 5;
SELECT 5 / 5;

-- Podemos, também, usar as colunas diretamente como base para os cálculos, caso necessário.

SELECT rental_duration + rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration - rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration / rental_rate FROM sakila.film LIMIT 10;
SELECT rental_duration * rental_rate FROM sakila.film LIMIT 10;

-- O DIV retorna o resultado inteiro de uma divisão, ignorando as casas decimais de um número. Veja os exemplos abaixo:

SELECT 10 DIV 3; -- 3
SELECT 10 DIV 2; -- 5
SELECT 14 DIV 3; -- 4
SELECT 13 DIV 2; -- 6

-- Já o operador MOD retorna o resto de uma divisão como resultado. Por exemplo:

SELECT 10 MOD 3; -- 1
SELECT 10 MOD 2; -- 0
SELECT 14 MOD 3; -- 2
SELECT 13 MOD 2; -- 1
SELECT 10.5 MOD 2; -- 0.5, ou seja, 2 + 2 + 2 + 2 + 2 = 10, restando 0.5

-- DESAFIOS COM DIV E MOD

-- Monte uma query usando o MOD juntamente com o IF para descobrir se o valor 15 é par ou ímpar. 
-- Chame essa coluna de ‘Par ou Ímpar’, onde ela pode dizer ‘Par’ ou ‘Ímpar’.

SELECT IF (15 MOD 2 = 0, 'PAR', 'IMPAR') AS 'par-ou-impar';

-- Temos uma sala de cinema que comporta 220 pessoas. Quantos grupos completos de 12]
-- pessoas podemos levar ao cinema sem que ninguém fique de fora?

SELECT 220 DIV 12;

-- Utilizando o resultado anterior, responda à seguinte pergunta: temos lugares sobrando? Se sim, quantos?

SELECT 220 MOD 18;

/*
	Arredondando valores
	Ter a capacidade de encontrar aproximações de valores é algo extremamente valioso 
	na criação de relatórios e gráficos, que são utilizados por softwares de todos os 
	tipos. O MySQL tem algumas funções que te ajudam a resolver isso. Vamos conhecê-las agora.

	O ROUND arredonda os números de acordo com sua parte decimal. Se for maior ou igual a 0.5, 
	o resultado é um arredondamento para cima. Caso contrário, ocorre um arredondamento para baixo. Veja os exemplos abaixo:
*/

-- Podemos omitir ou especificar quantas casas decimais queremos
SELECT ROUND(10.4925); -- 10
SELECT ROUND(10.5136); -- 11
SELECT ROUND(-10.5136); -- -11
SELECT ROUND(10.4925, 2); -- 10.49
SELECT ROUND(10.4925, 3); -- 10.493

-- O arredondamento sempre para cima pode ser feito com o CEIL:

SELECT CEIL(10.51); -- 11
SELECT CEIL(10.49); -- 11
SELECT CEIL(10.2); -- 11

-- O arredondamento sempre para baixo pode ser feito com o FLOOR:

SELECT FLOOR(10.51); -- 10
SELECT FLOOR(10.49); -- 10
SELECT FLOOR(10.9999999); -- 10

/*
	Exponenciação e raiz quadrada
	Para cálculos de exponenciação e raiz quadradas, podemos utilizar as funções POW e SQRT, respectivamente.
*/

-- Elevando um número X à potência Y usando a função POW:

SELECT POW(2, 2); -- 4
SELECT POW(2, 4); -- 16

-- Encontrando a raiz quadrada de um valor usando SQRT:

SELECT SQRT(9); -- 3
SELECT SQRT(16); -- 4

/*
	Gerando valores aleatórios
	Para situações em que se faz necessário gerar valores aleatórios, podemos usar a função RAND, em conjunto com as funções anteriores.
*/

-- Para gerar um valor aleatório entre 0 e 1:
SELECT RAND();

-- Para gerar um valor entre 7 e 13:
SELECT ROUND(7 + (RAND() * 6));

-- O cálculo que é feito é o seguinte: (7 + (0.0 a 1.0 * 6))

/*
Para fixar

Monte uma query que gere um valor entre 15 e 20.

Monte uma query que exiba o valor arredondado de 15.7515971 com uma precisão de 5 casas decimais.

Estamos com uma média de 39.494 de vendas de camisas por mês. Qual é o valor aproximado para baixo dessa média?

Temos uma taxa de inscrição de 85.234% no curso de fotografia para iniciantes. Qual é o valor aproximado para cima dessa média?

*/

SELECT ROUND(15 + (RAND() * 5));

SELECT ROUND(15.7515971, 5);

SELECT FLOOR(39.494);

SELECT CEIL(85.234);