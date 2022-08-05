function render(lista) { //defino la funcion que va a renderizar los autos
  //realizo un mapeo del array para transformar CADA objeto en un TEMPLATE STRING
  let impresion = lista.map(auto => (`
    <div class="datosAuto">
      <img class="fotoAuto" src=${auto.foto}>
      <h2>Marca: <b>${auto.marca}</b></h2>
      <h4>Modelo: <b>${auto.modelo}</b></h4>
      <h4>Color: <b>${auto.color}</b></h4>
      <button class="agregar" onclick="agregarAlCarrito(${auto.id})">AGREGAR!</button>
    </div>
  `))
  return impresion.join('') //retorno un unico template string uniendo el array
}

let catalogo = document.getElementById('catalogo') //selecciono el elemento
catalogo.innerHTML = render(listaAutos) //al que luego se le van a imprimir los autos