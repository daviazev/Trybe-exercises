# Exercício 1:
# Faça um programa que receba um nome e imprima o mesmo na vertical em escada invertida.

# Entrada:
# PEDRO

# Saída:

# PEDRO
# PEDR
# PED
# PE
# P

def nome_na_vertical(name: str):
    name_len = len(name)

    for _ in range(1, name_len + 1):
        print(name[:name_len])
        name_len -= 1


nome_na_vertical("Pedro")