let vino = {
    nombre: 'la puerta',
    varietal: 'bonarda',
    foto: 'https://images.vivino.com/thumbs/bdLSx1g9TOqQugWNh2EWug_pb_600x600.png',
    estacionamiento: 2000
}
let vinoo = {
    nombre: 'graffigna',
    varietal: 'malbec',
    foto: 'https://craftednicaragua.com/wp-content/uploads/2018/07/Graffigna-Centenario-Pinot-Grigio_b48a827bf49e42c51062f8081dedd265.jpg',
    estacionamiento: 2020
}
//console.log(vino)

function template(producto) {
    return `
        <div id=${producto.id} class='datos'>
            <img class="foto" src=${producto.foto}>
            <p>Nombre: <b>${producto.nombre}</b></p>
            <p>Varietal: <b>${producto.varietal}</b></p>
            <p>Estacionamiento: <b>${producto.estacionamiento}</b></p>
        </div>
    `
}
//console.log(template(vino))

function imprimirTemplate(id,producto) {
    producto.id = parseInt(100000000*Math.random())
    document.querySelector(`#${id}`).innerHTML += template(producto)
}
//imprimirTemplate('todos',vino)

function imprimirConFor1(id,arrayProductos) {
    for (let i=0 ; i<arrayProductos.length ; i++) {
        imprimirTemplate(id,arrayProductos[i])
        //console.log(arrayProductos[i])
    }
}
//imprimirConFor1('todos',[vino,vino,vino,vino])

function imprimirConFor2(id,arrayProductos) {
    for (let producto of arrayProductos) {
        imprimirTemplate(id,producto)
        //console.log(producto)
    }
}
//imprimirConFor2('todos',[vino,vino])

function imprimirConMap(id,arrayProductos) {
    arrayProductos.map(producto => 
        imprimirTemplate(id,producto)
        //console.log(producto)
    )
}
imprimirConMap('todos',[vino,vinoo])
imprimirConMap('todos',vinos) //cambiar el array hardodeado por la función creadora

function filtroConFor1(id,arrayProductos) {
    for (let i=0 ; i<arrayProductos.length ; i++) {
        if (arrayProductos[i].estacionamiento>2010) {
            imprimirTemplate(id,arrayProductos[i])
            //console.log(arrayProductos[i])
        }
    }
}
//filtroConFor1('mayores',[vinoo,vinoo,vino,vino])

function filtroConFor2(id,arrayProductos) {
    for (let producto of arrayProductos) {
        if (producto.estacionamiento>2010) {
            imprimirTemplate(id,producto)
            //console.log(producto)
        }
    }
}
//filtroConFor2('mayores',[vino,vinoo,vinoo])

function filtroConMap(id,arrayProductos) {
    arrayProductos.map(producto => {
        if (producto.estacionamiento>2010) {
            imprimirTemplate(id,producto)
            //console.log(producto)
        }
    })
}
filtroConMap('mayores',vinos) //cambiar el array hardodeado por la variable de la función creadora
console.log(almacenamiento)
imprimirConMap('todosTodos',almacenamiento) //cambiar el array hardodeado por la función creadora