# Lidando com exceções
# Erros podem acontecer: um arquivo pode não existir, permissões podem faltar e codificações podem falhar. Por isso temos de garantir que, ainda que um erro ocorra, faremos o fechamento do nosso arquivo.

# Como conseguimos lidar com erros em Python? Vamos agora falar sobre exceções!

# Há pelo menos dois tipos de erros que podem ser destacados: erros de sintaxe e exceções.

# Erros de Sintaxe
# Erros de sintaxe ocorrem quando o código utiliza recursos inexistentes da linguagem que não consegue interpretá-los. É como executar print{"Olá, mundo!"} em vez de print("Olá, mundo!").

# Exceções
# Já as exceções ocorrem durante a execução e resultam em mensagem de erro. Veja exemplos de exceções:

print(10 * (1 / 0))
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# ZeroDivisionError: division by zero
print(4 + spam * 3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# NameError: name 'spam' is not defined
print('2' + 2)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# TypeError: can only concatenate str (not "int") to str


# Observe que, apenas no exemplo acima, podemos observar três exceções: ZeroDivisionError, NameError e TypeError. A lista completa de exceções já embutidas na linguagem pode ser vista
# no link a seguir: https://docs.python.org/pt-br/3/library/exceptions.html#bltin-exceptions 
