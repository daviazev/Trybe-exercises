"""
1 - Exercício de fixação:

Exercício: Faça um algoritmo recursivo de soma. Esse algoritmo deve receber um número de 
parâmetro e deve somar todos os números antecessores a ele.

Exemplo:

Número passado por parâmetro à função: 4

Execução: 4 + 3 + 2 + 1

Resultado: 10

"""

def soma(n):
    if n == 0:
        return 0
    else:
        return n + soma(n - 1)


print(soma(4))