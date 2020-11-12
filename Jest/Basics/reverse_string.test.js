const reverseString = require("./reverse_string");

// toBeDefined
test("reverseString functions exists", () => {
	expect(reverseString).toBeDefined();
});

//
test("String reverses", () => {
	expect(reverseString("hello")).toEqual("olleh");
});
