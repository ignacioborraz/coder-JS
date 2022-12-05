function generarPlantilla(objeto) {
    return `
        <div id='${objeto._id}' class='datos'>
            <img class="foto" src='${objeto.photo}'>
            <p>Nombre: <b>${normalizarFrases(objeto.nameWine)}</b></p>
            <p>Varietal: <b>${normalizarFrases(objeto.variety)}</b></p>
            <p>Estacionamiento: <b>${objeto.harvest}</b></p>
            <input type='button' onclick='agregarOquitar("${objeto._id}")' value='favoritos'>
        </div>
    `
}

function imprimirEnDom(idDelHtml,arrayDeProductos) {
    let selector = document.querySelector(`#${idDelHtml}`)
    selector.innerHTML = ''
    arrayDeProductos.forEach(cadaElemento => selector.innerHTML += generarPlantilla(cadaElemento))
}