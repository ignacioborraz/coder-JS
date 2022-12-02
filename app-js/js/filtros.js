let radios = document.querySelectorAll("input[type=radio]") //selecciono TODOS los inputs radio
let buscador = document.querySelector('#palabra') //selecciono el input text

//a cada elemento de la lista de nodos le asigno la función que va a retornar el renderizado
//primero hago el filtro por fecha del array del almacenamiento
//luego, al array que "sale" de ese filtro: lo filtro por texto
radios.forEach(cadaElemento => cadaElemento.addEventListener('click', (event)=> {
    let filtrado = filtrarPorFecha(event.target.id,productosDelAlmacenamiento)
    filtrado = filtrarPorPalabra(buscador.value,filtrado)
    renderizarTodos('todos',filtrado) //renderizo este array filtro de filtro
}))

//a las letras capturadas con el evento
//primero hago el filtro de inclusión al array del almacenamiento
//luego, al array que "sale" de ese filtro: lo filtro por fecha
buscador.addEventListener('keyup', (event)=> {
    let filtrado = filtrarPorPalabra(event.target.value,productosDelAlmacenamiento)
    let seleccionado = document.querySelector("input[type=radio]:checked").id //defino la propiedad id del radio seleccionado
    filtrado = filtrarPorFecha(seleccionado,filtrado)
    renderizarTodos('todos',filtrado) //renderizo este array filtro de filtro
})

function filtrarPorFecha(id,array) {
    let filtrado = []
    if (id==='todosT') { //realizo el filtro según el id del radio
        filtrado = array
    } else if (id==='mayor') {
        filtrado = filtrarMayores(array)
    } else if (id==='menor') {
        filtrado = filtrarMenores(array)
    }
    console.log(filtrado)
    return filtrado //returno el array filtrado
}

function filtrarPorPalabra(valor,array) {
    let filtrado = array.filter(cadaElemento => cadaElemento.varietal.includes(valor))
    console.log(filtrado)
    return filtrado //returno el array filtrado
}

renderizarTodos('todos',productosDelAlmacenamiento) //renderizado inicial