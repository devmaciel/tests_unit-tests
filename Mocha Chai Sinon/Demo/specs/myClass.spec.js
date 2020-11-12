const MyClass = require("../src/myClass");
const sinon = require("sinon");
const chai = require("chai");
const chaiaspromise = require("chai-as-promise");
const expect = chai.expect;
const nock = require("nock");

const myObj = new MyClass();

// describe | it | skip
describe.skip("Test suit", () => {
	// expect | to | be | equal
	it("Test the add method", () => {
		expect(myObj.add(1, 2)).to.be.equal(3);
	});

	// spy | assert | calledOnce/calledTwice | calledWith
	it("spy the add method", () => {
		let spy = sinon.spy(myObj, "add");
		let arg1 = 10,
			arg2 = 20;
		myObj.callAnotherFn(arg1, arg2);
		// sinon.assert.calledOnce(spy);
		// sinon.assert.calledTwice(spy);
		expect(spy.calledOnce).to.be.true;
		expect(spy.calledWith(arg1, arg2)).to.be.true;
	});

	//
	it("spy the callback method", () => {
		let callback = sinon.spy();
		myObj.callTheCallbackFn(callback);
		expect(callback.calledOnce).to.be.true;
	});

	// MOCK basically a func inside a func, mock | exactly | withArgs | verify
	it("mock the sayHello method", () => {
		var mock = sinon.mock(myObj);
		var expectation = mock.expects("sayHello");
		expectation.exactly(1);
		expectation.withArgs("hello");
		myObj.callAnotherFn(10, 20);
		mock.verify();
	});
});

//=================================================

// stub (top-down)
describe.skip("Test suit for stub", () => {
	it("Stub the add method", () => {
		var stub = sinon.stub(myObj, "add");
		stub
			.withArgs(10, 20)
			.onFirstCall()
			.returns(100)
			.onSecondCall()
			.returns(200);
		expect(myObj.callTheCallbackFn(10, 20)).to.be.equal(100);
		expect(myObj.callTheCallbackFn(10, 20)).to.be.equal(200);
	});
});

// Testing a Promisse (WITHOUT chai-as-promisse)
describe.skip("Test the promisse, chai", () => {
	it("Promise test case", (done) => {
		this.timeout(5000);
		myObj.testPromise().then((result) => {
			expect(result).to.be.equal(6);
			done();
		});
	});
});

// Testing a Promisse (WITH chai-as-promisse)
describe.skip("Test the promisse, chai-as-promise", () => {
	it("Promise test case", () => {
		this.timeout(0);
		return expect(myObj.testPromise()).to.eventually.equal(6);
	});
});

// Stub and XHR (using nock)
describe.skip("XHR test suit", () => {
	it("Mock and stub xhr call", (done) => {
		const scope = nock("https://echo-service-new.herokuapp.com")
			.post("/echo")
			.reply(200, { id: 123 });

		myObj
			.xhrFn()
			.then((result) => {
				console.log(result);
				expect(result).to.be.equal({ id: 123 });
				done();
			})
			.catch((error) => {
				done(new Error("test case failed"));
			});
	});
});

// Hooks Mocha
describe.skip("Test suit", () => {
	after(() => {
		console.log("------ After the test suit");
	});

	before(() => {
		console.log("------ Before the test suit");
	});

	afterEach(() => {
		console.log("------ After each the test case");
	});

	beforeEach(() => {
		console.log("------ Before each the test case");
		sinon.restore();
	});

	//spy.restore() line26 TYPEERROR: attempted to wrap add which is already wrapped
	//more hooks at dummy.spec.js

	//... code
});
