function conferirDeposito() {
    let valor = document.getElementById('valor');
    let mostrar = document.getElementById('mostrar');

    let dinheiro = Number(valor.value);

    if(dinheiro < 1) {
        mostrar.innerHTML = '<h3>Dinheiro Insulficiente</h3>';
    } else if(dinheiro >= 1 && dinheiro < 1.75) {
        let troco = dinheiro - 1;
        if(troco === 0) {
            mostrar.innerHTML = `<h3>Tempo: 30 minutos</h3>`;
        } else {
            mostrar.innerHTML = `<h3>Tempo: 30 minutos</h3><h3>Troco R$:${troco.toFixed(2)}</h3>`;
        }
    } else if(dinheiro >= 1.75 && dinheiro < 3) {
        let troco = dinheiro - 1.75;
        if(troco === 0) {
            mostrar.innerHTML = `<h3>Tempo: 60 minutos</h3>`;
        } else {
            mostrar.innerHTML = `<h3>Tempo: 60 minutos</h3><h3>Troco R$:${troco.toFixed(2)}</h3>`;
        }
    } else if(dinheiro > 3) {
        let troco = dinheiro - 3;
        if(troco === 0) {
            mostrar.innerHTML = `<h3>Tempo: 120 minutos</h3>`;
        } else {
            mostrar.innerHTML = `<h3>Tempo: 120 minutos</h3><h3>Troco R$:${troco.toFixed(2)}</h3>`;
        }
    }   
}

document.getElementById('botao').addEventListener('click', conferirDeposito);
