let cantidad = -1

function loopCreador() {

    while (cantidad<0 || isNaN(cantidad)) {
        cantidad = parseInt(prompt('Ingrese la cantidad de vinos que desea cargar en la base de datos de MrWines:'))
        //console.log('va a ingresar '+cantidad+' vinos')
    }
    let vinos = [] //retornar cuando se cree la funcion
    if (cantidad>0) {
        //alert('la cantidad ingresada de productos es: '+cantidad) //comentar cuando se cree la funcion
        for (let i=1; i<=cantidad; i++) {
            let nombre = ""
            let varietal = ""
            let año = 0
            let foto = ""
            while (nombre.length<4) {
                nombre = prompt('Ingrese el nombre del vino '+i+':')
                //console.log('vino '+i+': '+nombre)
            }
            while (varietal.length<4) {
                varietal = prompt('Ingrese el varietal del vino '+i+':')
                //console.log('varietal del vino '+i+': '+varietal)
            }
            while (foto.length<15) {
                foto = prompt('Ingrese el foto del vino '+i+':')
                //console.log('foto del vino '+i+': '+foto)
            }
            while (isNaN(año) || año<1900) {
                año = parseInt(prompt('Ingrese la fecha de estacionamiento del vino '+i+':'))
                //console.log('estacionamiento del vino '+i+': '+año)
            }
            alert('DATOS VINO '+i+': '+nombre+' - '+varietal+' - '+año)
            let vino = {
                id: 'vino00'+i,
                nombre: nombre,
                varietal: varietal,
                foto: foto,
                estacionamiento: año
            }
            console.log(vino)
            vinos.push(vino)
            almacenamiento.push(vino) //luego PARA ALMACENAR
            localStorage.setItem('almacenDeVinos', JSON.stringify(almacenamiento))
        }
        console.log(vinos)
    }
    return vinos
    
}

let vinos = loopCreador()