/* Elaborar um programa para uma pizzaria, o qual leia o valor total de
uma conta e quantos clientes vão pagá-la. Calcule e informe o valor a ser
pago por cliente */

let valorTotal = parseInt(prompt("Valor total da conta:"));
let qntClientes = parseInt(prompt("Quantidade de clientes"));
let valorFinal = valorTotal / qntClientes;

alert(`Valor da conta: R$${valorTotal.toFixed(2)}\nNúmero de clientes: ${qntClientes}\nValor por cliente: R$${valorFinal.toFixed(2)}`);