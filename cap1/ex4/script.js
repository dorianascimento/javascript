/* Elaborar um programa que leia 2 notas de um aluno em uma disciplina.
Calcule e informe a média das notas. */

let nota1 = parseInt(prompt('Digite a note 1: '));
let nota2 = parseInt(prompt('Digite nota 2'));
let mediaNotas = (nota1 + nota2) / 2;
alert(`1ª Nota: ${nota1}\n2ª Nota: ${nota2}\nMédia: ${mediaNotas}`);