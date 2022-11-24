/* Elaborar um programa para uma loja, o qual leia o preço de um produto e
informe as opções de pagamento da loja. Calcule e informe o valor para
pagamento à vista com 10% de desconto e o valor em 3x. */

let valorProduto = parseInt(prompt('Digite valor do produto: '));
let produtoDesconto = valorProduto - (valorProduto * 0.1);
let produtoParcelado = valorProduto / 3;


alert(`Preço: R$${valorProduto.toFixed(2)}\nÀ vista: R$${produtoDesconto.toFixed(2)}\nOu 3x de R$${produtoParcelado.toFixed(2)}`)