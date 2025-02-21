const { sum, fromYenToPound,  } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.2 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(1)).toBe(1.2); 
})
test("One doollar should be 106.583 japan yen", function () {

    const { fromDollarToYen } = require('./app.js')


    expect(fromDollarToYen(250)).toBe(31975);
})
test("One euro should be 0.8 british pound", function(){
   
    const { fromYenToPound } = require('./app.js')
    
   
    expect(fromYenToPound(500)).toBe(400); 
})