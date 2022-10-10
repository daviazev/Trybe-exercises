FROM nginx:1.21-alpine AS primeiro-estagio
WORKDIR /site

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc
RUN mv /site/public/* /usr/share/nginx/html

ENTRYPOINT ["nginx", "-g", "daemon off;"]

# *Você já deve ter percebido algumas palavras reservadas novas neste Dockerfile, não é mesmo? 🧐

# Vamos falar sobre cada uma delas:


#  ---------------------------

# FROM nginx:1.21-alpine AS primeiro-estagio

    # O FROM já é nosso velho conhecido, mas agora temos um prefixo: AS;
    # Considere que durante o build podemos estar em estágios
    # diferentes, e neste caso nós acabamos de nomear o estágio atual para primeiro-estagio;
    # Dar nome aos estágios será útil para nós mais adiante, porém neste caso não tem efeito algum.

#  ---------------------------

# WORKDIR /site

    # A palavra reservada WORKDIR indica para o Docker qual é a pasta 
    # atual de trabalho dentro da imagem;

    # Ou seja, nas próximas ações deste build e também quando 
    # essa imagem for executada como um container, estaremos no caminho especificado pelo WORKDIR.

#  ---------------------------

# Três linhas com COPY

    # Aqui copiamos os três arquivos no formato de pastas que o Hugo espera que estes arquivos estejam;
    # Não temos nenhuma novidade no uso do COPY aqui.

#  ---------------------------

# Três linhas com RUN

    # A palavra reservada RUN indica que o comando à frente deve ser executado 
    # imediatamente, durante o processo de build. Logo:

        # A primeira linha com RUN instala o ferramenta Hugo na nossa imagem Docker;

        # A segunda linha executa o comando hugo –minify –gc para gerar as 
        # páginas finais em HTML, baseados nos arquivos de templates (index.html) e conteúdos (_index.md);

        # A terceira linha executa o comando mv para mover as páginas 
        # resultantes do Hugo para o caminho onde o nginx espera que tenha páginas HTML para serem servidas.

#  ---------------------------

# ENTRYPOINT ["nginx", "-g", "daemon off;"]

    # A palavra reservada ENTRYPOINT indica para o Docker qual comando
    # deve ser executado ao iniciar o container.

#  ---------------------------

# Construindo a nossa nova imagem

# Com os arquivos criados acima, vamos executar o comando docker build -t site-hugo .
# Veja a saída dos comandos a seguir:

# pessoa@trybe:~$ docker images
# REPOSITORY   TAG       IMAGE ID   CREATED   SIZE
# pessoa@trybe:~$ docker build -t site-hugo .
# Sending build context to Docker daemon   5.12kB
# [...]
# Successfully tagged site-hugo:latest
# pessoa@trybe:~$ docker images
# REPOSITORY   TAG           IMAGE ID       CREATED          SIZE
# site-hugo    latest        51dc918e901d   12 seconds ago   78.8MB
# nginx        1.21-alpine   51696c87e77e   3 weeks ago      23.4MB
