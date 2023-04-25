# # 🚀 Exercício 3:
# # Crie um algoritmo recursivo que encontre, em uma lista, o maior número inteiro.
# OBS: o exercício não pedia, mas eu adicionei uma lógica que cria arrays com o tamanho que o usuário quiser. 

import random

lista = []

n = int(input('Qual deve ser o tamanho da sua lista? '))

for i in range(n):
    numero = random.randint(1, 100)
    lista.append(numero)

print(lista)
print(f'MAIOR NUMERO: {max(lista)}')


def biggest_number(list: list[int]) -> int:
    last = list[-1]
    if len(list) == 1:
        return list[0]
    elif list[-2] > last:
        return biggest_number(list[:-1])
    else:
        new_list = list.copy()
        new_list.pop(-2)
        return biggest_number(new_list)

print(biggest_number(lista))
