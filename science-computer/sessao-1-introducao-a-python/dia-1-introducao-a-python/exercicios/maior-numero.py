# 🚀 Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def biggest_number (a: int, b: int) -> int:
    if a > b:
        return a
    
    return b

print(biggest_number(10, 5)) # 10
print(biggest_number(1, 5)) # 5