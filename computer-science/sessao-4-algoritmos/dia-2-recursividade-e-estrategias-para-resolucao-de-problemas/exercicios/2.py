# 🚀 Exercício 2:
# Transforme o algoritmo criado acima em recursivo. 
# OBS: o algoritmo está no arquivo 1.py


def count_even_number(n: int) -> int:
    if n == 0:
        return 1
    elif n % 2 == 0:
        return 1 + count_even_number(n - 1)
    else:
        return count_even_number(n - 1)

print(count_even_number(6)) # 4
