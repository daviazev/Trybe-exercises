# Exercício 2:
# Escreva um programa que receba vários números naturais e calcule a soma desses valores. Caso algum valor da entrada seja inválido (por exemplo uma letra), uma mensagem deve ser exibida na saída de erros no seguinte formato: “Erro ao somar valores, {valor} é um valor inválido”. Ao final, você deve imprimir a soma dos valores válidos.

# 🦜 Receba os valores em um mesmo input, solicitando à pessoa usuária que separe-os com um espaço. Receba os valores no formato str e utilize o método split para pegar cada valor separado. O método isdigit, embutido no tipo str, pode ser utilizado para verificar se a string corresponde a um número natural.

print("Digite quantos números quiser, e separe-os por espaço:")
NUMEROS = input("Digite: ")


def soma_de_numeros_naturais (nums: str) -> int:
    format = nums.split(' ')
    count = 0

    for i in format:
        if (not i.isdigit()):
            return print(f"Erro ao somar valores. '{i}' é um valor inválido. Por favor, digite apenas números")
        else:
            count += int(i)

    return print(count)
    

soma_de_numeros_naturais(NUMEROS)