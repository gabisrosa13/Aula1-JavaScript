const para = document.querySelector("p"); 

para.addEventListener("click", atualizarInformacoes);

function atualizarInformacoes() {  
    var nome = prompt("Insira um novo nome");
    var cpf =  prompt("Insira um novo cpf");
    var datanascimento =  prompt("Insira uma nova Data de nascimento");
    var endereco =  prompt("Insira um novo endereço");
    var telefone =  prompt("Insira um novo telefone");

    // Criar um novo parágrafo para exibir as informações
    const informacoes = document.createElement("p");

    informacoes.textContent = `
    nome = ${nome}
    cpf = ${cpf}
    datanascimento = ${datanascimento}
    endereco = ${endereco}
    telefone = ${telefone}`;

    //para dar espaço antes de imprimir a informação na tela
    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(document.createElement("br"));

    // imprimir as informações na tela
    document.body.appendChild(informacoes);
}
