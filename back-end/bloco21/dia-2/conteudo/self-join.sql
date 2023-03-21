-- O que é SELF JOIN e quando utilizá-lo

/*
	Há certos cenários nos quais faz sentido pesquisar e tirar alguma conclusão 
	analisando apenas uma única tabela. Os tipos de JOIN que você viu até agora 
	precisam necessariamente que mais de uma tabela seja incluída em uma query 
	para que um resultado possa ser gerado. O SELF JOIN não possui esse requisito. 
	Vamos ver a seguir algumas das aplicações do SELF JOIN.

	É possível fazer pesquisas e comparações dentro da própria tabela através do 
	SELF JOIN. Lembre-se dessa opção sempre que a informação que você precisa filtrar
	ou comparar para encontrar algo estiver em uma única tabela.

	Note que um SELF JOIN não é um tipo diferente de JOIN. É apenas um caso em que uma 
	tabela faz join consigo mesma. Você pode utilzar qualquer dos tipos de JOIN vistos
	ao realizar um SELF JOIN.

	Utilizando o schema hr como exemplo, se quisermos buscar o nome das pessoas
	colaboradoras e das respectivas gerências (manager), podemos montar 
	a seguinte query usando SELF JOIN:
*/

USE hr;

SELECT
    CONCAT(Employee.FIRST_NAME, " ", Employee.LAST_NAME) AS "Nome da Pessoa Colaboradora",
    CONCAT(Manager.FIRST_NAME, " ", Manager.LAST_NAME) AS "Nome Gerente"
FROM
	employees AS Employee
INNER JOIN
	employees AS Manager ON Employee.MANAGER_ID = Manager.EMPLOYEE_ID;

-- PARA FIXAR -- A SER FEITO!
    