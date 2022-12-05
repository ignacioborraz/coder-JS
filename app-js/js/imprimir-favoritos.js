function generarFavorito(objeto) {
    return `
        <div id='${objeto}' class='datos'>
            <p>ID del vino:</p>
            <b>${objeto}</b>
            <br>
            <input type='button' onclick='quitar("${objeto}")' value='quitar'>
        </div>
    `
}

function imprimirFavoritos(idDelHtml,arrayDeProductos) {
    let selector = document.querySelector(`#${idDelHtml}`)
    selector.innerHTML = ''
    arrayDeProductos.forEach(cadaElemento => selector.innerHTML += generarFavorito(cadaElemento))
}