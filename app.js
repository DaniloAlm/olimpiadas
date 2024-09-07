//console.log(dados);

function pesquisar() {
    // Seleciona a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa for uma string vazia
    if (!campoPesquisa  || campoPesquisa.length <=2){
        section.innerHTML = `<p>Nenhum atleta encontrado. Você precisa digitar o nome de um atleta ou de um esporte</p>`
        return
    }

    // converter para minusculas
    campoPesquisa = campoPesquisa.toLowerCase()
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada elemento do array "dados"
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        // se titulo includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Constrói o HTML para cada resultado da pesquisa, formatando os dados
        resultados += `
        <div class="item-resultado">
            <h2>${dado.titulo}</h2>
            <p class="descricao-meta">
                ${dado.descricao}
            </p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
    `;
        }
        
    }
    if (!resultados){
        section.innerHTML = `<p>Nenhum atleta encontrado</p>`
        return
    }
    // Atribui o HTML construído à seção de resultados
    section.innerHTML = resultados;
  }



