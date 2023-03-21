# Um passo de cada vez!

# Vamos para a prática 💪

FROM alpine:3.14
CMD ["echo", "Eu sou o milior, posso num ser, mas ne minha cabeça eu sou o milior"]

# Você deve estar se perguntando: somente essas duas linhas já são
# suficientes para criarmos nossa primeira imagem Docker? 🤔

# A resposta é sim! Vamos entender o significado de cada linha acima:

# --------------------------

# FROM alpine:3.14
#  -- Essa linha não parece ser tão estranha pra gente, pois já utilizamos a
#  imagem alpine:3.14 anteriormente;
# -- Logo, a sua explicação é bem nítida: a palavra reservada FROM significa 
# que vamos começar a construção desta imagem a partir da imagem Docker já existente!

# --------------------------

# CMD ["echo", "Eu sou o milior, posso num ser, mas ne minha cabeça eu sou o milior"]
# -- A palavra reservada CMD mostra qual comando deve ser 
# utilizado ao iniciar a imagem como um container;

# Neste caso, o CMD aceita uma lista de parâmetros (como o exemplo acima) 
# ou apenas os comandos, sem declarar como lista, por exemplo:
# CMD echo "olá mundo"

# --------------------------

# 🥳 Eba! Acabamos de criar nosso primeiro arquivo Dockerfile! 
# Mas e agora, como vamos construir de fato nossa primeira imagem Docker?

# Para isso, vamos utilizar o comando docker build <flags> -t <nome-da-imagem> <contexto>! 
# O comando espera:

# Uma flag -t, que indicará qual será o nome da imagem, e 
# também a tag, se utilizar o formato <nome>:<tag>;

# Um contexto, ou seja, em qual caminho de pasta o Docker deve se basear 
# para processar o arquivo Dockerfile.

# Normalmente utilizamos apenas . (ponto final), que indica a pasta atual.

# Baseando-se então no Dockerfile acima, vamos executar o 
# comando docker build -t primeira-imagem .. Vamos ver a saída dos comandos a seguir:

# pessoa@trybe:~$ docker images
# REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
# pessoa@trybe:~$ docker build -t primeira-imagem .
# Sending build context to Docker daemon  3.584kB
# Step 1/2 : FROM alpine:3.14
# 3.14: Pulling from library/alpine
# 8663204ce13b: Pull complete
# Digest: sha256:06b5d462c92fc39303e6363c65e074559f8d6b1363250027ed5053557e3398c5
# Status: Downloaded newer image for alpine:3.14
#  ---> e04c818066af
# Step 2/2 : CMD ["echo", "Eu sou pessoa estudante da Trybe!"]
#  ---> Running in e199bcd809d5
# Removing intermediate container e199bcd809d5
#  ---> 222b0b148f0b
# Successfully built 222b0b148f0b
# Successfully tagged primeira-imagem:latest
# pessoa@trybe:~$ docker images
# REPOSITORY        TAG       IMAGE ID       CREATED         SIZE
# primeira-imagem   latest    222b0b148f0b   3 seconds ago   5.59MB
# alpine            3.14      e04c818066af   3 weeks ago     5.59MB
