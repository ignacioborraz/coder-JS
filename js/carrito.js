let carrito = [] //defino el carrito vacio

function agregarAlCarrito(id) { //defino la funcion que lo va a cargar
  console.log(id);
  if (localStorage.getItem('carrito')) { //si existe el carrito en el almacenamiento
    carrito = JSON.parse(localStorage.getItem('carrito')) //si existe lo defino
    //console.log(carrito)
  } 
  let existe = carrito.find(e => e === id) //busco el id entre los id que hay en el carrito
  //console.log(existe) 
  if (existe) { //si encuentro un auto
    carrito = carrito.filter( e => e !== id) //hay que sacarlo del carrito
  } else { //si no existe
    carrito.push(id) //hay que agregarlo
  }
  //console.log(carrito)
  localStorage.setItem('carrito', JSON.stringify(carrito)) //vuelvo a guardar en el storage el carrito
  let autos = carrito.map(id => listaAutos.find(e => e.id===id)) //defino los autos
  console.log(autos) //veo si se cargan
  return autos
}
//agregue ONCLICK al mapeo de las cards (POSTA ES MAS FACIL LABURARLO ASI)