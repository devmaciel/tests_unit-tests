const functions = require("./functions");

// beforeEach | afterEach
// beforeEach(() => initDatabase()); // 'init database' before every task
// afterEach(() => closeDatabase()); // 'close database' after every task

// beforeAll | afterAll
// beforeAll(() => initDatabase()); // 'init database' before all tasks (one time)
// afterAll(() => closeDatabase()); // 'close database' after all tasks (one time)

// const initDatabase = () => console.log("Database Initialized...");
// const closeDatabase = () => console.log("Database Closed...");

// describe(create a group of tasks)
describe("Checking Names", () => {
	beforeEach(() => nameCheck());

	test("User is Jeff", () => {
		let user = "Jeff";
		expect(user).toBe("Jeff");
	});

	test("User is Karen", () => {
		let user = "Karen";
		expect(user).toBe("Karen");
	});
});

const nameCheck = () => console.log("Checking Name...");

//==============================================================

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

//=============================================================
// async data (expect assertion and return)

// assertions
test("User fetched name should be Leanne Graham", () => {
	expect.assertions(1); // assertions that are called, callbacks promisses
	return functions.fetchUser().then((data) => {
		expect(data.name).toEqual("Leanne Graham");
	});
});

// an Async Await function
test("User fetched name should be Leanne Graham", async () => {
	expect.assertions(1);
	const data = await functions.fetchUser();
	expect(data.name).toEqual("Leanne Graham");
});
