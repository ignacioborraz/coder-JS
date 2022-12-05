function filtrarPorVarietal(varietal,array) {
    let filtrado = array.filter(cadaElemento => cadaElemento.variety === varietal)
    return filtrado
}

function filtrarPorPalabra(valor,array) {
    let filtrado = array.filter(cadaElemento => cadaElemento.nameWine
        .toLowerCase().includes(valor.toLowerCase().trim()))
    return filtrado
}