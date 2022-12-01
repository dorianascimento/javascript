/* Elaborar um programa que leia um número. Informe se ele é par ou
ímpar. */

function verificacao() {
    let numero = document.getElementById('numero');
    let mostrar = document.getElementById('mostrar');

    let resultado = '';

    if(numero.value % 2 == 0) {
        resultado = `Resposta: ${numero.value} é Par`;
    } else {
        resultado = `Resposta: ${numero.value} é Ímpar`;
    }

    mostrar.innerHTML = resultado;
}

document.getElementById('botao').addEventListener('click', verificacao);