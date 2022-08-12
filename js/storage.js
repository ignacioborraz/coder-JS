let almacenamiento = []
if (localStorage.getItem('almacenDeVinos')) {
    almacenamiento = JSON.parse(localStorage.getItem('almacenDeVinos'))
}
console.log(almacenamiento)