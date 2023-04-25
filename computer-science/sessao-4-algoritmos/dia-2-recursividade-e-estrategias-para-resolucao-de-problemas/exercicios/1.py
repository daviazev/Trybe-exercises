# 🚀 Exercício 1:
# Crie um algoritmo não recursivo para contar quantos números pares 
# existem em uma sequência numérica (1 a n).


def count_even_number(n: int) -> int:
    count = 0
    for i in range(n + 1):
        if i % 2 == 0:
            count += 1

    return count

print(count_even_number(6)) # 4
