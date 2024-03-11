// Array para armazenar os jogos cadastrados
let jogosArray = [];

// Função para cadastrar um novo jogo
function cadastrar() {
    let nome = document.getElementById('nomeInput').value;
    let genero = document.getElementById('generoInput').value;
    let zerado = document.getElementById('dataInput').value;
    let plataforma = document.getElementById('plataformaInput').value;

    // Criar um objeto representando o jogo
    const jogo = {
        nome: nome,
        genero: genero,
        zerado: zerado,
        plataforma: plataforma
    };

    // Adicionar o jogo ao array de jogos
    jogosArray.push(jogo);

    // Atualizar a lista de jogos
    exibirLista();

    // Limpar o formulário
    document.getElementById('cadastroForm').reset();
}

// Função para exibir a lista de jogos
function exibirLista() {
    const lista_Jogos = document.getElementById('lista_Jogos');
    lista_Jogos.innerHTML = '';

    // Para cada jogo no array, criar um item de lista e adicionar à lista
    jogosArray.forEach((jogo, index) => {
        const li = document.createElement('li');
        li.innerHTML = <strong>${jogo.nome}</strong> - Gênero; {jogo.genero}; Zerado: {jogo.zerado}; Plataforma: {jogo.plataforma};
        lista_Jogos.appendChild(li);
    });
}

// Event listener para o formulário de cadastro
document.getElementById('cadastroForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o comportamento padrão de recarregar a página ao enviar o formulário
    cadastrar(); // Chama a função de cadastro
});

// Chama a função exibirLista() inicialmente para exibir quaisquer jogos já cadastrados
exibirLista();