function renderizarTodos(idDelHtml,arrayDeProductos) {
    document.getElementById(`${idDelHtml}`).innerHTML = "" //al selector lo inicio vacío
    arrayDeProductos.forEach(cadaElemento => imprimirEnHtml(idDelHtml,cadaElemento)) //luego le renderizo todos los productos
}

//fue necesario cambiar las funciones de renderizado
//para que returnen los arrays correspondientes y poder seguir filtrandolos en otras funciones
//hecho este cambio, como no se imprime/renderiza nada: EL PARAMETRO idDelHtml no es necesario
//la impresion se realizará con la funcion de arriba con el array de productos filtrado

function filtrarMayores(arrayDeProductos) {
    return arrayDeProductos.filter(cadaElemento => cadaElemento.estacionamiento>2010)
}

function filtrarMenores(arrayDeProductos) {
    return arrayDeProductos.filter(cadaElemento => cadaElemento.estacionamiento<=2010)
}

let apiUrl = 'https://mrwines.herokuapp.com/api/wines'

const fetchData = async () => {
    try {
        let data = await fetch(apiUrl)
        data = data.json()
        console.log(data)
    } catch(error) {
        console.log(error.message)
    }
}

fetchData()