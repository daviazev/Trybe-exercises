# Manipulação de arquivos
# Seja para armazenar alguma informação processada, para manipular imagens, áudios, vídeos ou recuperar dados de uma planilha, precisamos manipular arquivos.

# Podemos fazer uma operação de leitura, de escrita ou até de ambas, a depender da nossa necessidade. Porém, independentemente da operação executada, é preciso sempre fechar o arquivo após operá-lo.

# A função open é a responsável por abrir um arquivo, tornando possível sua manipulação. Seu único parâmetro obrigatório é o nome do arquivo. Por padrão, arquivos são abertos somente para leitura, mas podemos modificar isto passando o modo com que vamos abrir o arquivo. No exemplo abaixo, estamos utilizando mode="w", ou seja, estamos abrindo o arquivo para escrita:

file = open("arquivo.txt", mode="w")  # ao abrir um arquivo para escrita, um novo arquivo é criado mesmo que ele já exista, sobrescrevendo o antigo.

# Para escrevermos um conteúdo em um arquivo utilizamos a função write:

file.write("nome idade\n")
file.write("Maria 45\n")
file.write("Miguel 33\n")

# 💡 Só é possível escrever em um arquivo após abri-lo em um modo que permita escrita.

# Não precisa da quebra de linha, pois esse é um comportamento padrão do print
print("Túlio 22", file=file)

# Para escrever múltiplas linhas podemos utilizar a função writelines. Repare que a função espera que cada linha tenha seu próprio caractere de separação (\n):

LINES = ["Alberto 35\n", "Betina 22\n", "João 42\n", "Victor 19\n"]
file.writelines(LINES)

# Abrimos o arquivo e escrevemos seu conteúdo. Vamos então fechá-lo:

file.close()