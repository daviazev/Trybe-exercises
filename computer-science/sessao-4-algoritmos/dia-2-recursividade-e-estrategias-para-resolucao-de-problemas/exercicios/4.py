# 🚀 Exercício 4:
# Escreva um algoritmo recursivo para encontrar o máximo divisor comum (mdc) de dois inteiros.


# feito com ajuda do gabarito (estava muito cansado pra pensar quando fiz esse exercício)
def calc_mdc(a: int, b: int) -> int:
    if b == 0:
        return a
    else:
        return calc_mdc(b, a % b)

print(calc_mdc(455, 200)) # 5


# ******* EXPLICAÇÃO DADA PELO CHAT GPT 😀 *******

"""
Para encontrar o MDC de 455 e 200, podemos utilizar o algoritmo de Euclides:

Passo 1:
Dividimos 455 por 200: 455 ÷ 200 = 2 e resto 55
Logo, MDC(455,200) = MDC(200,55)

Passo 2:
Dividimos 200 por 55: 200 ÷ 55 = 3 e resto 35
Logo, MDC(200,55) = MDC(55,35)

Passo 3:
Dividimos 55 por 35: 55 ÷ 35 = 1 e resto 20
Logo, MDC(55,35) = MDC(35,20)

Passo 4:
Dividimos 35 por 20: 35 ÷ 20 = 1 e resto 15
Logo, MDC(35,20) = MDC(20,15)

Passo 5:
Dividimos 20 por 15: 20 ÷ 15 = 1 e resto 5
Logo, MDC(20,15) = MDC(15,5)

Passo 6:
Dividimos 15 por 5: 15 ÷ 5 = 3 e resto 0
Logo, MDC(15,5) = 5

Portanto, o MDC de 455 e 200 é 5.

"""