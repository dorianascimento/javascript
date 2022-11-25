/*
 Uma farmácia estácom uma promoção – Na compra de duas unidades de um
mesmo medicamento, o cliente recebe como desconto os centavos do
valor total. Elaborar um programa que leia descrição e preço de um
medicamento. Informe o valor do produto na promoção. A Figura 2.11
apresenta a tela com um exemplo de dados de entrada e saída do
programa.
*/


function promocao() {
    let medicamento = document.getElementById('medicamento');
    let preco = document.getElementById('preco');
    let mostrar = document.getElementById('mostrar');

    let nomeMedicamento = medicamento.value;
    let precoFinal = Number(preco.value);

    precoFinal = Math.round(precoFinal + precoFinal);

    mostrar.innerHTML = `Promoção de ${nomeMedicamento}<br>Leve 2 por apenas R$${precoFinal.toFixed(2)}`;

}

let botao = document.getElementById('botao');
botao.addEventListener('click', promocao);