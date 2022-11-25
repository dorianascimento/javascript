/* Elaborar um programa para uma lan house de um aeroporto – O programa deve
ler o valor de cada 15 minutos de uso de um computador e o tempo de
uso por um cliente em minutos. Informe o valor a ser pago pelo cliente,
sabendo que as frações extras de 15 minutos devem ser cobradas de
forma integral. A Figura 2.12 exibe um exemplo com dados do
programa.
*/

function calcular() {
    let valor = document.getElementById('valor');
    let tempo = document.getElementById('tempo');
    let mostrar = document.getElementById('mostrar');

    let valorTotal = Number(valor.value);
    let tempoTotal = Number(tempo.value);

    let valorFinal = valorTotal * tempoTotal;

    mostrar.innerHTML = `Valor total a pagar R$:${valorFinal.toFixed(2)}`;
}


let botao = document.getElementById('botao');
botao.addEventListener('click', calcular);