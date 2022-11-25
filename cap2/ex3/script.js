/* Um supermercado está com uma promoção – Para aumentar suas vendas no
setor de higiene, cada etiqueta de produto deve exibir uma mensagem
anunciando 50% de desconto (para um item) na compra de três
unidades do produto. Elaborar um programa que leia descrição e preço
de um produto
*/

function promocao() {
    let produto = document.getElementById('produto');
    let preco = document.getElementById('preco');
    let mostrar = document.getElementById('mostrar');

    let produtoFinal = produto.value;
    let precoFinal = Number(preco.value);

    let precoTotal = precoFinal / 2;
    let precoPromocao = precoFinal + precoFinal + precoTotal;

    mostrar.innerHTML = `${produtoFinal} - Promoção: Leve 3 por R$:${precoPromocao.toFixed(2)}<br>O 3º produto custa apenas R$:${precoTotal.toFixed(2)}`
}

let botao = document.getElementById('botao');
botao.addEventListener('click', promocao);