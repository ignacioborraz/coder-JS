function agregarAlCarrito(id) { //defino la funcion que va a agregar/quitar del carrito
  let existe = ids.find(e => e === id) //busco el id entre los id que hay en el carrito
  //console.log(existe) 
  if (existe) { //si lo encuentro
    ids = ids.filter( e => e !== id) //lo tengo que sacar del carrito
  } else { //si no está
    ids.push(id) //lo agrego
  }
  console.log(ids)
  localStorage.setItem('carrito', JSON.stringify(ids)) //vuelvo a guardar en el storage el carrito con el agregado/quitado
}

//agregue ONCLICK DE ESTA FUNCION al mapeo de las cards