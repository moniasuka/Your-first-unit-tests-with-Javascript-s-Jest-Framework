// esta es mi función que suma dos números
// const sum = (a,b) => {
//     return a + b
// }

// // solo un registro en consola para nosotros.
// console.log(sum(7,3))

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}


const fromDollarToYen = (cantidad) => {
cantidad = cantidad/oneEuroIs.USD //pasando de dolar a euro
cantidad = cantidad*oneEuroIs.JPY  // pasando de euro a yen
cantidad = cantidad.toFixed(2) // devuelve como string
cantidad = parseFloat(cantidad) // reconvierte a numero
return cantidad

}

const fromEuroToDollar = (cantidad) => {
cantidad = cantidad*oneEuroIs.USD // pasando Euro a dolar
return cantidad
}

const fromYenToPound = (cantidad) => {
    cantidad = cantidad/oneEuroIs.JPY // pasando Yen a Euros
    cantidad = cantidad*oneEuroIs.GBP // pasando Euros a Libras
    cantidad = cantidad.toFixed(2)
    cantidad = parseFloat(cantidad) 
    return cantidad
    }
    


// exporta la función para usarla en otros archivos 
// (similar a la palabra clave `export` cuando se usa webpack)
module.exports = { fromDollarToYen , fromEuroToDollar, fromYenToPound };

