/*Objetivo 1: Quando clicar na seta avançar passar e mostar o proximo card 
passo 1 - dar um jeito de pegar o elemento HTML da seta avançar.
passo 2 - dar um jeito de identificar o clique do usuário na seta avançar.
passo 3 - fazer aparecer o próximo cartão da lista.
passo 4 - buscar o cartão que esta selecionado e esconder.*/

const btnAvancar = document.getElementById('btn-avancar');
const cartoes = document.querySelectorAll('.cartao');
const btnVoltar = document.getElementById('btn-voltar');
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
};

function mostarCartao(indiceCartao){
cartoes[indiceCartao].classList.add('selecionado'); 
};



btnAvancar.addEventListener('click', function (){

    if(cartaoAtual === cartoes.length - 1) return;

    esconderCartaoSelecionado();

    cartaoAtual++;
    mostarCartao(cartaoAtual);
});

/* Objetivo 2: Quando clicar na seta voltarr passar e mostar o card anterior
passo 1 - dar um jeito de pegar o elemento HTML da seta voltar.
passo 2 - dar um jeito de identificar o clique do usuário na seta voltar.
passo 3 - fazer aparecer o cartão anterior da lista.
passo 4 - buscar o cartão que esta selecionado e esconder.*/

btnVoltar.addEventListener('click', function (){

    if(cartaoAtual === 0) return;

    esconderCartaoSelecionado();

    cartaoAtual--;
    mostarCartao(cartaoAtual);
});