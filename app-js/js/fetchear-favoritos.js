let apiUrl = 'https://mr-wines.up.railway.app/api/wines'

const fetchData = async () => {
    try {
        let data = await fetch(apiUrl)
        data = await data.json()
        data = data.response.wines
        imprimirFavoritos('favoritos',almacenamiento)
    } catch(error) {
        console.log(error)
        console.log(error.message)
    }
}

fetchData()