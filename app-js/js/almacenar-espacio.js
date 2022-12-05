let almacenamiento = []
if (localStorage.getItem('favoritos')) {
    almacenamiento = JSON.parse(localStorage.getItem('favoritos'))
}