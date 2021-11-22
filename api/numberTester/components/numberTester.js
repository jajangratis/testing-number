const CTX = require('../../../config/constants');


module.exports = (input) => {
    try {
        input = Number(input)
    } catch (error) {
        return CTX.invalidParameter()
    }
    if (typeof input != 'number' || isNaN(input) ) {
        return CTX.invalidParameter()
    } else {
        if (input > 0) {
            return CTX.okSample({
                input,
                category: 'positif'
            })
        } else {
            return CTX.okSample({
                input,
                category: 'negatif'
            })
        }
    }
}