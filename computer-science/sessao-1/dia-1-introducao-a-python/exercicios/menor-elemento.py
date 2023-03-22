# EXERCÍCIO BÔNUS

# Exercício 1: Dada uma lista, descubra o menor elemento. Por exemplo, 
# [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2.

from typing import List

def menor_elemento (list: List[int]) -> int:
    return min(list)

LISTA = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
print(menor_elemento(LISTA))