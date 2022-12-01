/*Elaborar um programa que leia a velocidade permitida em uma estrada e
a velocidade de um condutor. Se a velocidade for inferior ou igual à
permitida, exiba “Sem Multa”. Se a velocidade for de até 20% maior que a
permitida, exiba “Multa Leve”. E, se a velocidade for superior a 20% da
velocidade permitida, exiba “Multa Grave” */

function verficarVelocidade() {
    let velocidade = document.getElementById('velocidade');
    let condutor = document.getElementById('condutor');
    let mostrar = document.getElementById('mostrar');

    let velocidadePermitida = Number(velocidade.value);
    let velocidadeCondutor = Number(condutor.value);
    let velocidadeAcima = velocidadePermitida + (velocidadePermitida * 0.2);

    if(velocidadeCondutor <= velocidadePermitida) {
        mostrar.innerHTML = 'Situação: Sem Multa';
    } else if(velocidadeCondutor > velocidadePermitida && velocidadeCondutor <= velocidadeAcima) {
        mostrar.innerHTML = 'Situação: Multa Leve';
    } else {
        mostrar.innerHTML = 'Situação: Multa Grave';
    }

    
}

document.getElementById('botao').addEventListener('click', verficarVelocidade);