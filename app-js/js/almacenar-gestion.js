function agregarOquitar(id) {
    if (almacenamiento.includes(id)) {
        almacenamiento = almacenamiento.filter(ids => ids !== id)
    } else {
        almacenamiento.push(id)
    }
    localStorage.setItem('favoritos',JSON.stringify(almacenamiento))
}

function quitar(id) {
    console.log(id)
    almacenamiento = almacenamiento.filter(ids => ids !== id)
    localStorage.setItem('favoritos',JSON.stringify(almacenamiento))
    imprimirFavoritos('favoritos',almacenamiento)
}

function borrarFavoritos() {
    localStorage.removeItem('favoritos')
    almacenamiento=[]
    imprimirFavoritos('favoritos',almacenamiento)
}