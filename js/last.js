function addToLast(id,name,variety,country) {
    console.log(id)
    let wine = {
        id: id,
        nameWine: name,
        variety: variety,
        country: country
    }
    localStorage.setItem('last', JSON.stringify(wine))
    document.getElementById('last').innerHTML = `
        <p>${name} - ${variety}<p>
        <button onclick="deleteLast()">delete</button>
    `
}

let last = {}
if (localStorage.getItem('last')) {
    wine = JSON.parse(localStorage.getItem('last'))
    document.getElementById('last').innerHTML = `
        <p>${wine.nameWine} - ${wine.variety}<p>
        <button onclick="deleteLast()">delete</button>
    `
}

function deleteLast() {
    localStorage.removeItem('last')
    document.getElementById('last').innerHTML = ""
}