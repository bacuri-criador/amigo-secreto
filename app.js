//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let sorteioRealizado = false;
let toRemove = '';
let sorteado = '';

// Coloca a primeira letra de cada palavra em maiúscula
function capitalizar(texto) {
    return texto.split(' ')
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
        .join(' ');
}

// Verifica se o campo está vazio
function validaCampoVazio(texto) {
    return texto === '';
}

// Adicionar evento de keydown para adicionar amigo ao pressionar Enter
document.getElementById("amigo").addEventListener("keydown", function (event) 
{
  
  if (event.key === "Enter") {
    adicionarAmigo();
  }
});

listaDeAmigos.push(nomeAmigo);
  atualizarListaDeAmigos();
  inputAmigo.value = "";
  
// Verifica se o amigo já foi adicionado
function validaDuplicado(amigo) {
    return amigos.includes(amigo);
}
