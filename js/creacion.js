/* Modificar la función creadora de productos:
- Es necesario que una vez construido el objeto del nuevo producto: se agregue al storage
- La función debe retornar el array de productos */

//saco el prompt que pide la cantidad de productos a cargar
//luego saco tambien la condicion de cantidad>0 ya que esa variable no existe porque ya no la uso con el prompt de la linea 19
//EL BUCLE DE LA CANTIDAD LO SACO: YA QUE SOLAMENTE VAMOS A INGRESAR PRODUCTOS DESDE EL FORMULARIO
//EL FORMULARIO SERÁ UNICO (PARA UN PRODUCTO)
//let cantidad = -1
let arrayDeVinos = []

//es necesario crear una funcion ya que es un procedimiento que se va a repetir varias veces
//esa cantidad de veces que se va a repetir, se va a dar: CADA VEZ QUE EL USUARIO QUIERA
//ese querer del usuario está vinculado a un evento: boton, recarga de pagina, cambio de pagina, etc

function creacionDeProductos(objeto) { //inicia el loop de cantidad y luego lo evalua para ver si ejecuta la funcion de validacion y carga de datos
/*     while (cantidad<0 || isNaN(cantidad)) { //isNaN: is not a number - no es un numero
        cantidad = parseInt(prompt('Ingrese la cantidad de vinos a subir a la base de datos:'))
        console.log(cantidad)
    }
    if (cantidad>0) {
        validacionesDeDatos()
    } */
    
    validacionesDeDatos(objeto)
    renderizadoConEach('todos',productosDelAlmacenamiento) //va a renderizar todos los productos
    filter('mayores',productosDelAlmacenamiento) //va a renderizar los productos mayores a 2010
}

function validacionesDeDatos(objeto) { //funcion que ejecuta las validaciones y carga de datos  
    console.log(objeto)
    //for (let i=1; i<=cantidad; i++) { //inicio el loop en 1, porque si el usuario teclea 0 (cantidad=0): NO SE TIENE QUE INICIAR EL LOOP
            let nombre = objeto.nombre
            if (nombre.length<4) {
                alert('El nombre del vino tiene que tener al menos 4 letras')
            }
            let varietal = objeto.varietal
            if (varietal.length<4) {
                alert('el varietal del vino tiene que tener al menos 4 letras')
            }
            let foto = objeto.foto
            if (foto.length<10) {
                alert('la foto del vino tiene que tener al menos 10 letras')
            }
            let estacionamiento = objeto.estacionamiento
            if (isNaN(estacionamiento) || estacionamiento<1900) {
                alert('el año de estacionamiento tiene que ser mayor a 1900')
            }
        if (nombre.length>=4 && varietal.length>=4 && foto.length>=10 && estacionamiento>=1900) {
            let vino = {
                nombre: nombre,
                varietal: varietal,
                foto: foto,
                estacionamiento: estacionamiento
                //los objetos se forman con propiedades: valor de esa propiedad
                //por eso lo primero puede tener cualquier nombra, pero lo segundo SI O SI
                //TIENE QUE EXISTIR EN EL PROGRAMA
            }
            //console.log(vino)
            vino.id = parseInt(Math.random()*1000000) //saco la parte entera de (un numero aleatorio entre 0 y 1 y lo multiplico po un millon)
            //console.log(vino)
            arrayDeVinos.push(vino)
            productosDelAlmacenamiento.push(vino)
            //pusheamos al array con los datos del almacenamiento
            localStorage.setItem('productos',JSON.stringify(productosDelAlmacenamiento))
            //guardar en el almacenamiento la modificacion de los productos
            //antes de guardar es necesario convertir el array a json con stringify
        }
        console.log(productosDelAlmacenamiento)
        //}
}

document.getElementById('subir').addEventListener('click', (event) => creacionDeProductos(subirProducto(event)))
console.log(arrayDeVinos)