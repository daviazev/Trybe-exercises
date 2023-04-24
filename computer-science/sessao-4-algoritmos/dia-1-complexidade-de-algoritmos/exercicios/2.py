# 🚀 Exercício 2
# Utilize o módulo random da linguagem Python para gerar um array com 100 números. Cada 
# um deve ser a média de n números gerados aleatoriamente. Qual é a ordem de complexidade 
# de tempo e de espaço deste programa?

import random

def random_list(n, target):
    list = []
    n_media = []

    for _ in range(1, target + 1):
        for _ in range(1, n + 1):
            n_media.append(random.randint(1, 100))
        
        list.append(sum(n_media) / n)
        n_media = []
    
    return list

n = int(input('Qual deve ser o valor de N? '))
length = int(input('Qual deve ser o tamanho do array? '))
  
result = random_list(n, length)

print(len(result))
print(result)
