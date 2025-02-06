function sortear() {
    let quantidade = parentInt(document.getElementById('quantidade').value);
    let de = parentInt(document.getElementById('de').value);
    let ate = parentInt(document.getElementById('ate').value);

    let sortudos [];
    let numero;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sortudos}</label>`

    for (let i = 0 < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        while (sortudos.includes(numero)){
            numero = obterNumeroAleatorio(de, ate);
        }
        sortudos.push(numero);
    }
}
function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}