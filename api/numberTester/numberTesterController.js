const numberTester = require('./components/numberTester')

exports.postTestNumber = async (req, res, next) => {
    let input = req.body.input || req.query.input
    let result = await numberTester(input)
    return res.status(result.status).json(result);
}