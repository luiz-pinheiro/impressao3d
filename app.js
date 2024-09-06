function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos.
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa e o armazena em uma variável.
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    // Verifica se o campo de pesquisa está vazio. Se estiver, exibe uma mensagem de erro e encerra a função.
    if (!campoPesquisa) {
        section.innerHTML = "Nenhum resultado foi encontrados! Nenhuma informação foi inserida no campo de busca.";
        return;
    }

    // Converte o valor do campo de pesquisa para letras minúsculas para facilitar a comparação.
    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa variáveis para armazenar os resultados da pesquisa, o título, a descrição e as tags do produto.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada produto no array "dados".
    for (let dado of dados) {
        // Converte o título, a descrição e as tags do produto para letras minúsculas para facilitar a comparação.
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLocaleLowerCase();

        // Verifica se o termo de pesquisa está presente no título, descrição ou tags do produto.
        // Se estiver, adiciona o produto aos resultados da pesquisa.
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
          <div class="item-resultado">
            <h2><a href="#" target="_blank">${dado.titulo}</a></h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href="${dado.link}" target="_blank">Link para compra</a>
          </div>`;
        }
    }

    // Verifica se foram encontrados resultados. Se não, exibe uma mensagem de erro.
    if (!resultados) {
        section.innerHTML = "Nenhum resultado foi encontrados!";
        return;
    }

    // Atribui os resultados da pesquisa ao conteúdo da seção, substituindo o conteúdo anterior.
    section.innerHTML = resultados;
}