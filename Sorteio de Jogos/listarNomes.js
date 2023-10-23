const fs = require("fs");

const pasta = "../box2dfront/";
const arquivoTexto = "nomes-dos-arquivos.txt";

fs.readdir(pasta, (err, files) => {
  if (err) {
    console.error("Erro ao listar arquivos na pasta:", err);
    return;
  }

  const nomesDosArquivos = files.map((file) => `"${file}"`).join(", ");

  const conteudoArquivo = `[${nomesDosArquivos}]`;

  fs.writeFile(arquivoTexto, conteudoArquivo, (err) => {
    if (err) {
      console.error("Erro ao escrever no arquivo de texto:", err);
    } else {
      console.log(`Nomes dos arquivos foram escritos em ${arquivoTexto}.`);
    }
  });
});
