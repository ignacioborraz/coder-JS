function generarFavorito(varietal) {
    return `
    <label class="flex column center" for="${varietal}">
        <span>${varietal}</span>
        <input type="radio" id="${varietal}" name="varietal">
    </label>
    `
}

function imprimirChecks(idDelHtml,arrayDeProductos) {
    let selector = document.querySelector(`#${idDelHtml}`)
    selector.innerHTML = ''
    arrayDeProductos.forEach(cadaElemento => selector.innerHTML += generarFavorito(cadaElemento))
}