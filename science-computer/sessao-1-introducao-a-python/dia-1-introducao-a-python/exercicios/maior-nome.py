# 🚀 Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nome com a 
# maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", 
# "Cairo", "Joana"], o retorno deve ser "Fernanda".

from typing import List

NAMES = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

def biggest_name (list: List[str]) -> str:
    biggest = ''
    for name in list:
        if len(name) > len(biggest):
            biggest = name

    return biggest

print(biggest_name(NAMES))
