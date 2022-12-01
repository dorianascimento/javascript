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
