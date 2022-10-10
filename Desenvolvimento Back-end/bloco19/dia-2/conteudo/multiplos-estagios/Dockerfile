# Primeiro Estágio
FROM alpine:3.14 AS primeiro-estagio
WORKDIR /site

COPY config.toml config.toml
COPY index.html /site/layouts/index.html
COPY _index.md /site/content/_index.md

RUN apk add hugo
RUN hugo --minify --gc

# Segundo Estágio
FROM nginx:1.21-alpine AS segundo-estagio
COPY --from=primeiro-estagio /site/public/ /usr/share/nginx/html
ENTRYPOINT ["nginx", "-g", "daemon off;"]

# Você já deve ter percebido que este Dockerfile é muito 
# parecido com o anterior, mas existem dois detalhes importantes:

# -------------------------------------

# Temos duas linhas de FROM:

#     Cada linha de FROM significa o início de um novo estágio;
#     Você pode considerar cada estágio como uma imagem Docker intermediária;
#     A última referência de FROM no Dockerfile sempre será a imagem final.

# -------------------------------------

# No segundo estágio, a linha COPY possui uma flag extra --from=primeiro-estagio:

    # Esse é o segredo principal de construção de múltiplos estágios;

    # O COPY possui a capacidade de copiar arquivos entre os estágios;

    # A flag --from indica que devemos copiar o seguinte arquivo ou pasta 
    # de um estágio para o estágio atual;

    # Neste caso acima, estamos copiando as páginas HTML resultantes 
    # do Hugo diretamente para uma imagem Docker limpa de nginx!

# -------------------------------------

# No primeiro estágio, não precisamos do nginx, pois vamos apenas executar 
# a ferramenta Hugo. Logo, a imagem base escolhida foi a alpine:3.14. 
# Ao copiar os arquivos necessários e executar o comando, conseguimos 
# nossas páginas HTML prontas e presentes no caminho /site/public/.


# Após isso, iniciamos um novo estágio, agora com a imagem base 
# nginx:1.21-alpine. Nesse caso, as únicas ações foram copiar as 
# páginas HTML prontas do estágio anterior e deixá-las no caminho 
# que o nginx espera que estejam presentes: /usr/share/nginx/html.

# -------------------------------------


# Vamos construir essa nova imagem Docker e compará-la com a imagem anterior? 🧐

# Veja a saída dos comandos abaixo:

