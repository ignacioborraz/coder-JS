/* Definir un condicional para ver si existen productos en el storage:
- Si existen: traerlos y guardarlos en una variable
- Si no existe: crear la variable vacía */
//supongamos que la variable/clave del storage es "productos"

let productosDelAlmacenamiento = []
if (localStorage.getItem('productos')) {
    productosDelAlmacenamiento = JSON.parse(localStorage.getItem('productos'))
    //busco la clave con getItem
    //una vez que la encuentra: transformo el json en objeto/array
}

console.log(productosDelAlmacenamiento)