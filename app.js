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

function validaTrataInput(amigoInput) {

    // remove espaços do começo e final do texto
    const amigo = capitalizar(amigoInput.trim());

    // verifica se o campo está vazio
    if (validaCampoVazio(amigo)) {
        alert('Digite o nome do Amigo!');
        return;
    }

    // valida se o nome possui apenas letras
    if (!/^[a-zA-Z\s]+$/.test(amigo)) {
        alert(`O nome ${amigo} é inválido! O nome deve conter apenas letras!`);
        return;
    }

    // verifica se o amigo já foi adicionado
    if (validaDuplicado(amigo)) {
        alert(`O nome do Amigo ${amigo} já foi adicionado, coloque outro!`);
        return;
    }
    amigos.push(amigo);
}


// Adiciona um amigo à lista
function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo').value;

    //adiciona amigos separados por vírgula
    if (amigoInput.includes(',')) {
        //split a string em um array
        let amigosInput = amigoInput.split(',');
        for (let item of amigosInput) {
           validaTrataInput(item);
        }
    }else{
        validaTrataInput(amigoInput);
    }

    document.getElementById('resultado').innerHTML = '';
    atualizarListaAmigos();
    limparElemento("amigo");
}
