function generarFavorito(objeto) {
    let nombreCorrecto = objeto.nombre.charAt(0).toUpperCase()+objeto.nombre.slice(1).toLowerCase()
    let varietalCorrecto = objeto.varietal.charAt(0).toUpperCase()+objeto.varietal.slice(1).toLowerCase()
    //charAt(0): es un metodo de string que accede a la posicion que se pone entre comillas
    //la posicion es similar a la de los arrays: pos1 = indice0   pos2 = indice1
    //slice(1): es un metodo de string que accede a la palabra, la recorta en la posicion indicada
    //y devuelve TODAS las letras que le continuan
    return `
        <div id=${objeto.id} class='datos'>
            <img class="foto" src=${objeto.foto}>
            <p>${nombreCorrecto} - ${varietalCorrecto}</p>
            <input type='button' onclick='quitar(${objeto.id})' value='quitar'>
        </div>
    `
}

function imprimirFavoritos(idDelHtml,id) {
    let datos = productosDelAlmacenamiento.find(e => e.id === id) //variable que contiene los datos del producto que encuentra con ese id
    document.querySelector(`#${idDelHtml}`).innerHTML += generarFavorito(datos) //forma optimizada
}

function renderizarFavoritos(idDelHtml,arrayDeFavoritos) {
    document.getElementById(`${idDelHtml}`).innerHTML = "" //al selector lo inicio vacío
    arrayDeFavoritos.forEach(cadaElemento => imprimirFavoritos(idDelHtml,cadaElemento)) //luego le renderizo todos los productos
}

renderizarFavoritos('favoritos',productosDeFavoritos)