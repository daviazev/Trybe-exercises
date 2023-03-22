# EXERCÍCIO BÔNUS

# Exercício 3: Crie uma função que receba um número inteiro N e retorne o somatório de
# todos os números de 1 até N. Por exemplo, para N = 5, o valor esperado será 15.

def somatorio (num: int) -> int: 
    count = 0
    for i in range(1, num + 1):
        count += i 

    print(count)


N = 5
somatorio(N)