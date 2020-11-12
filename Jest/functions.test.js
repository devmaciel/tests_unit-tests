const functions = require("./functions");

// test | expect | add | toBe
test("Adds 2 + 2 to equal 4", () => {
	expect(functions.add(2, 2)).toBe(4);
});

// not
test("Adds 2 + 2 to NOT equal 5", () => {
	expect(functions.add(2, 2)).not.toBe(5);
});

// isNull | toBeNull
test("Should be null", () => {
	expect(functions.isNull()).toBeNull();
});

// checkValue | toBeFalsy(0,false,undefined)
test("Should be false", () => {
	expect(functions.checkValue(0)).toBeFalsy();
});

// createUser | toEqual(compare objetcs/arrays)
test("User should be jao jhones", () => {
	expect(functions.createUser()).toEqual({
		firstName: "jao",
		lastName: "jhones",
	});
});

// toBeLessThan | toBeLessThanOrEqual
test("Should be under 1600", () => {
	const load1 = 800;
	const load2 = 700;
	expect(load1 + load2).toBeLessThan(1600);
});

// toMatch
test("There is no I in team", () => {
	expect("team").not.toMatch(/I/i); // regular expression
});

// toContain
test("Admin should be in usernames", () => {
	usernames = ["john", "karen", "admin"];
	expect(usernames).toContain("admin");
});
