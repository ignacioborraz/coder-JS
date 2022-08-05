let ids = []
if (localStorage.getItem('carrito')) { //si existe el carrito en el almacenamiento
  ids = JSON.parse(localStorage.getItem('carrito')) //guardo los ids del storage
  //console.log(ids)
}