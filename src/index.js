module.exports = function reverse (n) {
    newString = ''
    nString = String(n)
    if (nString.slice(0,1) === "-") {
        n = Number(nString.slice(1, nString.length))
        while (n != 0) {
            number = n % 10;
            newString += number;
            n = parseInt(n/10);
        }
    }
    
    while (n != 0) {
        number = n % 10;
        newString += number;
        n = parseInt(n/10);
    }
return Number(newString)
}
