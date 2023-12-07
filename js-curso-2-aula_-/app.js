let listaDeNumerosSorteados = [];
let numeroSecreto = gerarNumeroAleatorio();
let tentaivas = 1;

function exibirTesxtoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagenInicial() {
  exibirTesxtoNaTela('h1', 'jogo do numero secreto');
  exibirTesxtoNaTela('p', 'escolha um numero entre 1 e 10');
}

exibirMensagenInicial();

let campo = document.querySelector(tag)
campo.innerHTML = texto

function verificarChute() {
    let chute = document.querySelector('input').value;
  
    if (chute == numeroSecreto){
      exibirTesxtoNaTela('h1', 'acertou');
      let palavraTentativas = tentaivas > 1 ? 'tentativas' : 'tentativa';
      let MensagenTentativas =`voce descobriu o numero secreto com ${tentaivas} ${palavraTentativas}`;
      exibirTesxtoNaTela('p', MensagenTentativas);
      document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
      if (chute > numeroSecreto) {
        exibirTesxtoNaTela('p', 'o numero secreto e menor');
      } else {
        exibirTesxtoNaTela('p', 'o numero secreto e maior ');
      }
      tentaivas++;
      limparCampo()
    }
}

function gerarNumeroAleatorio() {
 let numeroEscolhido = parseInt(Math.random() *  + 1);
 let quantidadeDeElemantosNaLista = listaDeNumerosSorteados.length;

if (quantidadeDeElemantosNaLista == 3) {
  listaDeNumerosSorteados = []
}

 if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
  return gerarNumeroAleatorio();
 } else{
  listaDeNumerosSorteados.push(numeroEscolhido)
  return numeroEscolhido;
 }
}
function limparCampo() {
  chute + document.querySelector('input');
  chute.value = '';
}

function reiniciarJogo() {
  numeroSecreto = gerarNumeroAleatorio();
  limparCampo();
  tentaivas = 1 
  exibirMensagenInicial()
  document.getElementById('reniciar').setAttribute('disabled', true)
}
