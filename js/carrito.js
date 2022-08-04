let carrito = []

function agregarAlCarrito(id) {
  console.log(id);
  if (localStorage.getItem('carrito')) { //si existe el carrito en el almacenamiento
    carrito = JSON.parse(localStorage.getItem('carrito')) //si existe lo defino
    //console.log(carrito)
  } 
  let verification = carrito.find(e => e === id) //busco el id entre los id que hay en el carrito
  //console.log(verification) 
  if (verification) { //si encuentro un producto
    carrito = carrito.filter( e => e !== id) //hay que sacarlo del carrito
  } else { //si no existe
    carrito.push(id) //hay que agregarlo
  }
  //console.log(carrito)
  localStorage.setItem('carrito', JSON.stringify(carrito)) //vuelvo a guardar en el storage el carrito
  //ESTAS 3 LINEAS NO SE NECESITAN ACÁ SALVO QUE QUIERAS RENDERIZAR EL CARRITO EN ESTA PAGINA (MALA UX)
  let productos = carrito.map(id => listaAutos.find(e => e.id===id)) //defino los productos
  console.log(productos) //veo si se cargan
  return productos //ESTE DATO ES EL QUE LUEGO TENDRIA QUE RENDERIZAR (HACELO EN CARRITO PORFA)
  //addItemToShoppingCart(producto.nombre, producto.precio, producto.image)
  //lo mismo esta funcion... ver donde renderizas
}
//agregue ONCLICK al mapeo de las cards (POSTA ES MAS FACIL LABURARLO ASI)