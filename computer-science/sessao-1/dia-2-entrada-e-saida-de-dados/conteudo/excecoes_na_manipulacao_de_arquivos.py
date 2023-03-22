# Lidando com exceções enquanto manipulamos arquivos
# Vamos ver agora como podemos nos prevenir de possíveis erros que ocorrem quando manipulamos arquivos. Sempre devemos fechar um arquivo e podemos, em um bloco try, fazer isso utilizando a instrução finally ou else. O finally é uma outra cláusula do conjunto try, cuja finalidade é permitir a implementação de ações de limpeza, que sempre devem ser executadas independentemente da ocorrência de ações. Já o else ocorre sempre que todo o try for bem sucedido.

try:
    arquivo = open("arquivo.txt", "r")
except OSError:
    # será executado caso haja uma exceção
    print("arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("arquivo manipulado e fechado com sucesso")
    arquivo.close()
finally:
    # será sempre executado, independentemente de erro
    print("Tentativa de abrir arquivo")


# Como estamos abrindo o arquivo em modo de leitura, uma exceção será levantada caso ele não exista, executando as cláusulas except e finally. Entretanto, se alterarmos o modo para escrita, o arquivo será criado mesmo se inexistente, executando as cláusulas else e finally.

# Este padrão é muito comum, não só em arquivos, mas também em outros recursos que devemos utilizar e liberar ao final (conexões de bancos de dados, por exemplo). Tão comum que o Python tem um mecanismo próprio para lidar com isto.

# O with é a palavra reservada para gerenciamento de contexto. Este gerenciamento (with) é utilizado para encapsular a utilização de um recurso, garantindo que certas ações sejam tomadas independentemente se ocorreu ou não um erro naquele contexto.

# A função open retorna um objeto que se comporta como um gerenciador de contexto de arquivo que será responsável por abrir e fechar o mesmo. Isto significa que o arquivo possui mecanismos especiais que, quando invocados utilizando with, alocam um determinado recurso — um arquivo — e o liberam quando o bloco for finalizado.

# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no contexto à variável file
with open("arquivo.txt", "w") as file:
    file.write("Nome qualquer 2910\n")
# como estamos fora do contexto, o arquivo foi fechado
print(file.closed)