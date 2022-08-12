/* Definir una función que tome como parámetros el id de una etiqueta html y un array de productos y retorne la impresion de todos los los productos.
- Reutilizar la función anterior
- Generar una función con for
- Generar una función con for in
- Generar otra función con map
- Probar los resultados con los datos hardcodeados y evaluar las ventajas de cada opción */
function renderizadoConFor (idDelHtml,arrayDeProductos) {
    for (let i=0; i<arrayDeProductos.length; i++) {
        impresionEnHtml(idDelHtml,arrayDeProductos[i])
    }
}
let productos = [vino1,vino2,vino2,vino2,vino1,vino1,vino2]
//renderizadoConFor('todos',productos)

function renderizadoConForIn (idDelHtml,arrayDeProductos) {
    for (let producto of arrayDeProductos) { //para cada elemento de un array
        impresionEnHtml(idDelHtml,producto)
        console.log(producto) //va a consologuear el producto (objeto)
    }
    for (let producto in arrayDeProductos) { //para cada indice del elemento de un array
        impresionEnHtml(idDelHtml,arrayDeProductos[producto])
        console.log(producto) //va a consologuear el indice del producto (objeto)
    }
}
//renderizadoConForIn('todos',productos) //renderiza 5 productos por el for of y 5 productos por el for of

function renderizadoConEach (idDelHtml,arrayDeProductos) {
    //quiero ingresar un array de objetos
    //quiero mapear para transformarlo en un array de templates
    arrayDeProductos.forEach(cadaElemento => impresionEnHtml(idDelHtml,cadaElemento))
}
renderizadoConEach('todos',productos)

/* Definir una función que tome como parámetros el id de una etiqueta html y
//un array de productos y retorne la impresion de los productos
//con fecha de estacionamiento mayor al 2010.
- Generar una función con for
- Generar una función con for in
- Generar otra función con filter */

function filterConFor (idDelHtml,arrayDeProductos) {
    for (let i=0; i<arrayDeProductos.length; i++) {
        if (arrayDeProductos[i].estacionamiento>2010) {
            impresionEnHtml(idDelHtml,arrayDeProductos[i])
        }
    }
}
//filterConFor('mayores',productos)

function filterConForOf (idDelHtml,arrayDeProductos) {
    for (let producto of arrayDeProductos) { //por cada producto del array de productos
        if (producto.estacionamiento>2010) {
            impresionEnHtml(idDelHtml,producto)
        }
    }
    for (let producto in arrayDeProductos) { //producto acá es el índice! no el objeto
        if (arrayDeProductos[producto].estacionamiento>2010) {
            impresionEnHtml(idDelHtml,arrayDeProductos[producto])
        }
        console.log(producto)
    }
}
//filterConForOf('mayores',productos) //renderiza 8 vinos debido a que filtra 2 veces

function filter (idDelHtml,arrayDeProductos) {
    let arrayFiltrado = arrayDeProductos.filter(cadaElemento => cadaElemento.estacionamiento>2010)
    console.log(arrayFiltrado)
    renderizadoConEach(idDelHtml,arrayFiltrado) //llamo a la funcion anterior, porque tengo que imprimir un array
}
filter('mayores',productos)