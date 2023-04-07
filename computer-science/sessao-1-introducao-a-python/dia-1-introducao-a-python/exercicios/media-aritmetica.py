# 🚀 Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.

from typing import List

def media_aritmetica (list: List[int]) -> float:
    if not list: 
        return 0
    
    return sum(list) / len(list)

print(media_aritmetica([10, 5, 9])) # 8.0
print(media_aritmetica([])) # 0