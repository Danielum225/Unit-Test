const fromDollarToYen = usd => {
    return usd * 127.09;
}
const fromEuroToDollar = eur => {
    return eur * 1.07;
}
const fromYenToPound = yen => {
    return yen * 0.0063;
}

module.exports = {fromDollarToYen, fromEuroToDollar, fromYenToPound}