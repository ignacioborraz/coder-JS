let cantidad = -1
//isNaN: is not a number - no es un numero

while (cantidad<0 || isNaN(cantidad)) {
    cantidad = parseInt(prompt('Ingrese la cantidad de vinos a subir a la base de datos:'))
    console.log(cantidad)
}

let arrayDeVinos = []
if (cantidad>0) {
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