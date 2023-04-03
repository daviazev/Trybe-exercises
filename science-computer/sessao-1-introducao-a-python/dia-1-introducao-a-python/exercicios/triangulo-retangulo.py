# EXERCÍCIO BÔNUS

# Exercício 2: Faça um programa que, dado um valor n qualquer, tal que n > 1, imprima 
# na tela um triângulo retângulo com n asteriscos de base. Por exemplo, para n = 5 o 
# triângulo terá 5 asteriscos na base:

def triangulo_retangulo (num: int):
    for i in range(1, num  + 1):
        print(i * "*")

triangulo_retangulo(5)