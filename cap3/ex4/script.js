/* Elaborar um programa que leia três lados e verique se eles podem ou não
formar um triângulo. Para formar um triângulo, um dos lados não pode ser
maior que a soma dos outros dois. Caso possam formar um triângulo, exiba
também qual o tipo do triângulo: Equilátero (3 lados iguais), Isósceles (2
lados iguais) e Escaleno (3 lados diferentes)
*/

function verificarLados() {
    let a = document.getElementById('lado-a').value;
    let b = document.getElementById('lado-b').value;
    let c = document.getElementById('lado-c').value;
    let mostrar = document.getElementById('mostrar');

    if(a === b && a === c) {
        mostrar.innerHTML = '<h3>Lados podem formar um triângulo</h3><h3>Tipo: Equilátero</h3>';
    } else if(a !== b && a !== c) {
        mostrar.innerHTML = '<h3>Para formar um triângulo, todos lados lados precisam ser iguais</h3><h3>Tipo: Escaleno</h3>';
    } else {
        mostrar.innerHTML = '<h3>Para formar um triângulo, todos lados lados precisam ser iguais</h3><h3>Tipo: Isósceles</h3>';
    }
}
 
document.getElementById('botao').addEventListener('click', verificarLados);
