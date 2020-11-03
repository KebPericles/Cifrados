//funcion para cuando queremos saber si la cadena no tiene texto o algo legible
function isCadenaVacia(cadena) {
    let space = '/^[^\S]*$/'; // expresion regular que pide que solo halla espacios o nada
    return space.test(valorCampo);
}

//funcion para cuando queremos saber si una cadena tiene caracteres especiales incluyendo los acentos
function isCadenaConCarEsp(cadena, isNTildeCE, isAcentosCE) {
    // expresion regular que pide letras numeros o espacios, quedan excluidas letras especiales, a excepcion de la ñ, y con acentos
    let carEsp = RegExp('^[\\w\\s' + (!isNTildeCE ? '\\u00F1' : '') +
        (!isAcentosCE ? '\\u00E1\\u00E9\\u00ED\\u00F3\\u00F3\\u00FC' : '') + ']*$', 'ig');
    return !carEsp.test(cadena);
}

//funcion para cuando queremos saber si una cadena tiene caracteres especiales sin incluir acentos
function isCadenaConCarEspAcentos(cadena, conNTilde) {
    let carEsp = '/^[\w\s\u00F1]*$/ig'; // expresion regular que pide letras, letras con acento, numeros o espacios, quedan excluidas letras especiales
    return !carEsp.test(cadena);
}