// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function (valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


const fromDollarToYen = function (valueInDollar) {
    let valueInYen = fromEuroToDollar(valueInDollar )* 127.9;
    return valueInYen;
}


const fromYenToPound = function (valueInYen) {
    let valueInPound = fromEuroToDollar(fromDollarToYen (valueInYen)) *0.8;
    return valueInPound;
}




const sum = (a, b) => {
    return a + b
}
console.log(sum(7, 3))



module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };