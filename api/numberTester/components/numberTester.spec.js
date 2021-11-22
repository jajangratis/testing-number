const testfile = require('./numberTester')

describe('Test Case Penentu Angka Negatif Atau Positif', () => {
    it('should not be number and return error', () => {
        let test = testfile('a')
        expect(test.msg).toBe('invalid_parameter')
    });
    it('should be number and return ok', () => {
        let test = testfile('1')
        expect(test.msg).toBe('ok')
    });
    it('should return ok and categorized as positive', () => {
        let test = testfile(1)
        expect(test.msg).toBe('ok')
        expect(test.data.category).toBe('positif')
    });
    it('should return ok and categorized as negative', () => {
        let test = testfile(-1)
        expect(test.msg).toBe('ok')
        expect(test.data.category).toBe('negatif')
    });
});