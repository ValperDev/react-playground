const addNumber = require('./component');

test("3 + 1 should return 4", ()=> {
    expect(addNumber(3,1)).toBe(4);
});