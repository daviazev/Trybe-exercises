# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1, 
# imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

ASTERISCO = "*"
n = 10

def quadrado_de_asteriscos (qtt):
    for _ in range(1, qtt + 1):
        print (qtt * ASTERISCO)

quadrado_de_asteriscos(n)