let apiUrl = 'https://mr-wines.up.railway.app/api/wines'

const fetchData = async () => {
    try {
        let data = await fetch(apiUrl)
        data = await data.json()
        data = data.response.wines
        let checks = new Set(data.map(event => event.variety))
        imprimirChecks('varietal',checks)
        imprimirEnDom('todos',data)
        let radios = document.querySelectorAll("input[type=radio]")
        let buscador = document.querySelector('#palabra')
        radios.forEach(cadaElemento => cadaElemento.addEventListener('click', (event)=> {
            let filtrado = filtrarPorVarietal(event.target.id,data)
            filtrado = filtrarPorPalabra(buscador.value,filtrado)
            imprimirEnDom('todos',filtrado)
        }))
        buscador.addEventListener('keyup', (event)=> {
            let filtrado = filtrarPorPalabra(event.target.value,data)
            let seleccionado = document.querySelector("input[type=radio]:checked")
            if (seleccionado?.id) {
                filtrado = filtrarPorVarietal(seleccionado.id,filtrado)
            }
            imprimirEnDom('todos',filtrado)
        })
    } catch(error) {
        console.log(error)
        console.log(error.message)
    }
}

fetchData()