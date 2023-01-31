/*
para instalar usando docker use: "docker pull mongo:4"

Note que estamos baixando a versão 4 do Mongo, a qual será utilizada nesta seção. 
Caso queira baixar uma outra versão, basta alterar a tag - que representa a versão desejada - 
em mongo:tag.

Iniciando uma instância do Mongo Server
Para executar esta imagem você pode usar a linha abaixo.

docker run --name <nome-do-container< -d mongo:4

No comando abaixo você disponibiliza um container mapeando sua porta 27017 para a porta 27017 do localhost.

docker run --name <nome-do-container> -d -p 27017:27017 mongo:4

Executando o shell do Mongo no Docker
O comando docker exec permite que você execute comandos dentro de um container do Docker. 
O comando a seguir executará o Mongo dentro do container Docker que criamos anteriormente.

docker exec -it <nome-do-container-ou-id> mongo

Obs: você pode usar o comando mongosh no lugar de mongo para ter acesso ao shell com novos recursos.

Importando arquivos locais para dentro do container utilizando mongoimport

A ferramenta mongoimport importa conteúdo de um arquivo JSON, CSV ou TSV criada por mongoexport 
ou, potencialmente, outra ferramenta de exportação de terceiros. Utilizamos esse recurso num container da seguinte forma:

1 - No primeiro passo, copiamos o arquivo que será importado para dentro do nosso container.
*/
