test("One euro should be 1.07 dollars", function(){
    expect(fromEuroToDollar(1)).toBe(1.07);
})
test("One dollar should be 127.09 yen", function(){
    expect(fromDollarToYen(1)).toBe(127.09);
})
test("One yen should be 0.0063 pounds", function(){
    expect(fromYenToPound(1)).toBe(0.0063);
})

const {fromDollarToYen, fromEuroToDollar, fromYenToPound} = require('./app.js')