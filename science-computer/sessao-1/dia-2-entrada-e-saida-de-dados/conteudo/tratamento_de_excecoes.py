# Tratamento de exceções
# Para tratar exceções utilizamos o conjunto de instruções try, com as palavras reservadas try e except. O funcionamento dessa cláusula ocorre da seguinte forma:

# Se nenhuma exceção ocorrer, a cláusula except é ignorada e a execução da instrução try é finalizada.
# Se ocorrer uma exceção durante a execução da cláusula try, as instruções remanescentes na cláusula são ignoradas. Se o tipo da exceção ocorrida tiver sido previsto em algum except, então essa cláusula será executada.
# Se não existir nenhum tratador previsto para tal exceção, trata-se de uma exceção não tratada e a execução do programa termina com uma mensagem de erro.
# Vamos agora ver um exemplo de tratamento de exceções:

while True:
    try:
        x = int(input("Please enter a number: "))
        break
    except ValueError:
        print("Oops!  That was no valid number.  Try again...")

# Cole o código acima no terminal interativo e teste, na prática, como funciona o tratamento de exceções.