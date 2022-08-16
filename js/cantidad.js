let cantidad = -1
let arrayDeVinos = []

creacionDeProductos() //ejecuto funcion creadora
//es necesario crear una funcion ya que es un procedimiento que se va a repetir varias veces
//esa cantidad de veces que se va a repetir, se va a dar: CADA VEZ QUE EL USUARIO QUIERA
//ese querer del usuario está vinculado a un evento: boton, recarga de pagina, cambio de pagina, etc

function creacionDeProductos () { //inicia el loop de cantidad y luego lo evalua para ver si ejecuta la funcion de validacion y carga de datos
    while (cantidad<0 || isNaN(cantidad)) { //isNaN: is not a number - no es un numero
        cantidad = parseInt(prompt('Ingrese la cantidad de vinos a subir a la base de datos:'))
        console.log(cantidad)
    }
    if (cantidad>0) {
        validacionesDeDatos()
        renderizadoConEach('todos',arrayDeVinos) //va a renderizar todos los productos
        filter('mayores',arrayDeVinos) //va a renderizar los productos mayores a 2015
    }
}

function validacionesDeDatos() { //funcion que ejecuta las validaciones y carga de datos  
        for (let i=1; i<=cantidad; i++) { //inicio el loop en 1, porque si el usuario teclea 0 (cantidad=0): NO SE TIENE QUE INICIAR EL LOOP
            let nombre = ""
            while (nombre.length<4) {
                nombre = prompt('Ingrese el nombre del vino '+i+':')
                //console.log(nombre)
            }
            let varietal = ""
            while (varietal.length<4) {
                varietal = prompt('Ingrese el varietal del vino '+nombre+':')
                //console.log(varietal)
            }
            let foto = ""
            while (foto.length<10) {
                foto = prompt('Ingrese la foto del vino '+nombre+' y varietal '+varietal+':')
                //console.log(foto)
            }
            let año = ""
            while (isNaN(año) || año<1900) {
                año = parseInt(prompt('Ingrese la fecha de estacionamiento del vino '+nombre+' y varietal '+varietal+':'))
                //console.log(año)
            }
            let vino = {
                nombre: nombre,
                varietal: varietal,
                foto: foto,
                estacionamiento: año
                //los objetos se forman con propiedades: valor de esa propiedad
                //por eso lo primero puede tener cualquier nombra, pero lo segundo SI O SI
                //TIENE QUE EXISTIR EN EL PROGRAMA
            }
            //console.log(vino)
            vino.id = parseInt(Math.random()*1000000) //saco la parte entera de (un numero aleatorio entre 0 y 1 y lo multiplico po un millon)
            //console.log(vino)
            arrayDeVinos.push(vino)
        }
}

console.log(arrayDeVinos)