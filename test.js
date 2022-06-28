const { sum } = require('./app.js');

test('adds 14 + 9 to equal 23', () => {
    //dentro de la prueba llamamos a nuestra función sum con 2 números
    let total = sum(14, 9);

    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    
    const { fromEuroToDollar } = require('./app.js')
    
    const dollars = fromEuroToDollar(3.5)
    
    const expected = 3.5 * 1.2;
    
    expect(expected).toBe(dollars);
})
// DollarToYen
test("One dollar should be 106.58 yens", function(){
    const { fromDollarToYen } = require('./app.js')
    const yens = fromDollarToYen(2.5)
    const expected = 2.5 * 127.9;
    expect(expected).toBe(yens);
})
// YenToPound
test("One pond should be 0.0062", function(){
    const { fromYenToPound } = require('./app.js')
    const pounds = fromYenToPound(3.5)
    const expected = 3.5 * 0.8;

    expect(expected).toBe(pounds);
})