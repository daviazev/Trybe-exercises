# Exercício 1:
# Faça um programa que solicite o nome de uma pessoa usuária e imprima-o na vertical. Exemplo:

# F
# U
# L
# A
# N
# O

def nome_na_vertical (nome: str):
    for i in range(1, len(nome) + 1):
        print(nome[i - 1])

nome_na_vertical("FULANO")
