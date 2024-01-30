const returnString = require("./component1");

describe("The text", ()=> {
    test("should not return empty string", ()=> {
        expect(returnString("data")).not.toEqual("");
    });
    test("should return 'data selected'", ()=> {
        expect(returnString("data")).toEqual("data selected");
    })
})