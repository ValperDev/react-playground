const addNumber = require('./component');

test("3 + 1 should return 4", ()=> {
    expect(addNumber(3,1)).toBe(4);
});

test("1 + 1 should not return 0", ()=> {
    expect(addNumber(1,1)).not.toBe(0);
});

test("4 + 4 should be higher than 7", ()=> {
    expect(addNumber(4,4)).toBeGreaterThan(7);
});