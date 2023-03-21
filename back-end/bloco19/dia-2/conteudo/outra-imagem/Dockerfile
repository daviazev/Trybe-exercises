# Pronto! Com este arquivo HTML finalizado, podemos começar a escrever 
# nosso Dockerfile e entender duas novas palavras reservadas: o COPY e o EXPOSE! 
# Veja o arquivo completo abaixo:

FROM httpd:2.4
COPY index.html /usr/local/apache2/htdocs
EXPOSE 80
CMD ["httpd-foreground"]

# Vamos entender linha por linha o que este Dockerfile vai fazer:

#  ---------------------------
# FROM httpd:2.4
# Vamos começar a construção desta imagem se baseando na imagem já existente, chamada httpd, com a tag 2.4

#  ---------------------------
# COPY index.html /usr/local/apache2/htdocs/
# Temos uma nova palavra reservada: COPY

# Esta linha vai copiar um arquivo no computador local e colocá-lo 
# dentro da imagem, no caminho especificado à frente.

# Ou seja, a linha vai copiar o arquivo index.html, que está na pasta atual 
# da execução do comando docker build, e vai copiá-lo para o caminho /usr/local/apache2/htdocs/, 
# dentro da imagem!

# Este caminho específico é onde o httpd vai procurar por arquivos HTML a serem servidos.

# Alternativamente pode-se utilizar o comando ADD index.html /usr/local/apache2/htdocs. 
# Nesse caso, não mudaria nada, mas o comando ADD tem duas funcionalidades interessantes, tais como:

#     Fazer o download do conteúdo de uma URL <src> na pasta de destino <dest>
#     Descompactar automaticamente arquivos compactados de formatos reconhecidos 
#     (.tar, .gzip, .bzip2, etc)

#  ---------------------------
# EXPOSE 80

# Temos uma nova palavra reservada: EXPOSE
# Esta linha indica que a imagem poderá receber conexões pelo número da porta que for informado;

# Neste caso, indica que a imagem poderá receber conexões na porta 80, que é 
# a porta padrão utilizada pelo httpd.

#  ---------------------------
# CMD ["httpd-foreground"]

# Estamos especificando que o programa httpd-foreground seja executado 
# ao iniciar essa imagem como um container.

# Este programa já veio junto com a imagem base, portanto não precisamos nos preocupar.

#  ---------------------------

# Vamos chamar esta nova imagem Docker de meu-servidor-web. Para isso, siga os comandos abaixo:

# pessoa@trybe:~$ docker images
# REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
# pessoa@trybe:~$ docker build -t meu-servidor-web .
# Sending build context to Docker daemon  4.608kB
# Step 1/4 : FROM httpd:2.4
# 2.4: Pulling from library/httpd
# 1fe172e4850f: Pull complete
# e2fa1fe9b1ec: Pull complete
# 60dd7398e74e: Pull complete
# ea2ca81c6d4c: Pull complete
# f646c69a26ec: Pull complete
# Digest: sha256:e02a2ef36151905c790efb0a8472f690010150f062639bd8c0760e7b1e884c07
# Status: Downloaded newer image for httpd:2.4
#  ---> c30a46771695
# Step 2/4 : COPY index.html /usr/local/apache2/htdocs/
#  ---> 7d0383790929
# Step 3/4 : EXPOSE 80
#  ---> Running in b1ff2675de2c
# Removing intermediate container b1ff2675de2c
#  ---> 6b36d46af133
# Step 4/4 : CMD ["httpd-foreground"]
#  ---> Running in 4ccc22554fbf
# Removing intermediate container 4ccc22554fbf
#  ---> 5c1536911684
# Successfully built 5c1536911684
# Successfully tagged meu-servidor-web:latest
# pessoa@trybe:~$

# Vamos acompanhar passo a passo do que aconteceu acima:

# Nós executamos o comando docker images para mostrar que não temos nenhuma imagem Docker atualmente em nosso computador;

# Executamos o comando docker build -t meu-servidor-web .

# Lembrando que o comando precisa ser executado na mesma pasta onde o arquivo 
# Dockerfile e o arquivo index.html estão presentes!

# Como não tínhamos a imagem httpd:2.4 localmente, 
# o Docker baixou esta imagem do Docker Hub.

# Após a execução de todos os Steps da construção da imagem, o
# Docker imprime na tela: Successfully tagged meu-servidor-web:latest

# Agora, podemos executar nossa imagem como um novo container e acessar 
# este servidor web através do nosso navegador! Vamos testar?

