function normalizarFrases(frase) {
    let oraciones = frase.split(".")
    let palabras = oraciones.map(cadaOracion => cadaOracion.trim().charAt(0).toUpperCase()+cadaOracion.trim().slice(1).toLowerCase())
    let palabrasJuntadas = palabras.join(". ")
    return palabrasJuntadas
}