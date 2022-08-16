
//lista = [...lista].map(e => e.value) //transformo la lista en array
//.. spread opeator ( operador de dispersion ) sirve para "meterse" adentro

//cargo una propiedad cuyo nombre es el name de cadaElemento
//a esa propiedad le asigno el valor de cadaElemento

function subirProducto(event) {
    event.preventDefault()
    let lista = document.querySelectorAll("input[type=text]")
    let vinoDelFormulario = {}
    lista.forEach(cadaElemento => vinoDelFormulario[cadaElemento.name] = cadaElemento.value)
    console.log(vinoDelFormulario)
    return vinoDelFormulario
}

//creo la funcion que captura los datos y que hay que pasarle a la funcion validacionDeDatos