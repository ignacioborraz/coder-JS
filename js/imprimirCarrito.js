let carrito = ids.map(id => listaAutos.find(e => e.id === id)) //mapeo los ids para transformarlos en objetos (los autos)
console.log(carrito)

function htmlCarrito(lista) {
    return lista.map(auto => (`
        <div class="carritoAuto">
            <p class="dato">Marca: <b>${auto.marca}</b></p>
            <p class="dato">Modelo: <b>${auto.modelo}</b></p>
            <p class="dato">Color: <b>${auto.color}</b></p>
            <input type='button' class="button" onclick="agregarAlCarrito(${auto.id})" value="×">
        </div>
    `)).join('')
}

let impresion = htmlCarrito(carrito)
console.log(impresion)

document.getElementById('carrito').innerHTML = impresion