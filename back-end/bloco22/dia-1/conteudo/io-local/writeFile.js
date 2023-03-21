const fs = require('fs').promises;

const texto =
  'Esse texto foi escrito pelo arquivo writeFile.js! QUE DEMAAAAAAAAAAAAAAAAAAIS! EU AMO BACKEND!';

async function main() {
  try {
    await fs.writeFile('./meu-arquivo.txt', texto);
    console.log('Arquivo escrito com sucesso!');
  } catch (err) {
    console.error(`Erro ao escrever o arquivo: ${err.message}`);
  }
}

main();

// Anota aí 🖊: No writeFile, assim como ocorre no readFile, você pode especificar algumas opções na escrita de arquivos passando um terceiro parâmetro (flag) opcional em seus métodos.
