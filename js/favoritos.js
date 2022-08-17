//tenemos que definir una funcion que
//si el producto está en el storage (con clave favoritos) me lo saque
//si el producto no está en el storage me lo agregue

//NOTA: LA CLAVE FAVORITOS VA A TENER ALOJADOS UNICAMENTE LOS ID DE LOS PRODUCTOS

function agregarOquitar(id) {
    if (productosDeFavoritos.includes(id)) {
        productosDeFavoritos = productosDeFavoritos.filter(ids => ids !== id)
    } else {
        productosDeFavoritos.push(id)
    }
    console.log(productosDeFavoritos)
    localStorage.setItem('favoritos',JSON.stringify(productosDeFavoritos))
    //cuando se agrega/quita un producto es necesario agregarlo/quitarlo del storage
}

function quitar(id) {
    //primero saco el id del array de ids
    //luego saco el id del almacenamiento (modificando el array sin ese id en el storage)
    //para finalizar re-renderizo las cards de productos
    productosDeFavoritos = productosDeFavoritos.filter(ids => ids !== id) //del array de ids saco el id que se quiere quitar
    console.log(productosDeFavoritos)
    localStorage.setItem('favoritos',JSON.stringify(productosDeFavoritos)) //cuando se agrega/quita un producto es necesario agregarlo/quitarlo del storage
    renderizarFavoritos('favoritos',productosDeFavoritos)
}

function borrarFavoritos() {
    localStorage.removeItem('favoritos') //quito la clave del storage
    productosDeFavoritos=[] //quito los id de productos del array
    renderizarFavoritos('favoritos',productosDeFavoritos) //re-renderizo LA NADA 
    //TAREA: usar una funcion que renderice una card bonita que diga que no hay productos en favoritos
}