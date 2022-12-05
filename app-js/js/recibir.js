let data = {}
if (!localStorage.getItem('nombre')) {
    let nombre = prompt('como te llamas?')
    localStorage.setItem('nombre',nombre)
    alert(`hola ${nombre}!`)
} else if (!localStorage.getItem('data')) {
    let edad = prompt('cuantos años tenés?')
    data.edad = edad
    localStorage.setItem('data',data)
    alert(`naciste en ${2022-edad}!`)
}