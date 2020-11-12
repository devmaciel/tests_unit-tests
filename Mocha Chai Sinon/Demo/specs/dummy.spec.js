var chai = require("chai");
var expect = chai.expect;

// Root Level Hooks
describe("Dummy test suit", () => {
	it("dummy test case", () => {
		expect(true).to.be.true;
	});
});

beforeEach(() => console.log("---- root level hook"));
