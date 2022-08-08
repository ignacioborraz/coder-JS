function print(wines) {
    return wines.map(wine => `
        <div class="datos">
            <img class="foto" src=${wine.photo}>
            <h2>Name: <b>${wine.nameWine}</b></h2>
            <h4>Country: <b>${wine.variety}</b></h4>
            <h4>Variety: <b>${wine.country}</b></h4>
            <button class="agregar">touch!</button>
        </div>
    `).join('')
}

async function printProducts() {
  try {
    let response = await fetch("https://mrwines.herokuapp.com/api/wines")
    let data = await response.json()
    console.log(data)
    console.log(data.response.wines)
    document.getElementById('wines').innerHTML = print(data.response.wines)
  } catch(error) {
    console.error(error)
  }
}

printProducts()