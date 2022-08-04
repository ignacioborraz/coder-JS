function render(lista) {
  for(const auto of lista) {
    catalogo.innerHTML += `
      <div class="datosAuto">
        <img class=fotoAutoViejo src=${auto.foto}>
        <h2>Marca: <b>${auto.marca}</b></h2>
        <h4>Modelo: <b>${auto.modelo}</b></h4>
        <h4>Color: <b>${auto.color}</b></h4>
        <button class="agregar" onclick="agregarAlCarrito(${auto.id})">AGREGAR!</button>
      </div>
    `
  }
}

render(listaAutos)