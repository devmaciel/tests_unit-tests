const XMLHttpRequest = require('xmlhttprequest');
XMLHttpRequest;

class MyClass {
	constructor() {
		console.log("class initialized");
	}

	add(arg1, arg2) {
		var result;
		result = arg1 + arg2;
		return result;
	}

	//
	callAnotherFn(arg1, arg2) {
		this.sayHello();
		var result = this.add(arg1, arg2);
		return result;
	}

	//
	callTheCallbackFn(callback) {
		callback();
	}

	//
	sayHello() {
		console.log("hello");
	}

	//
	testPromise() {
		return new Promisse((resolve, reject) => {
			setTimeout(() => resolve(1), 3000);
		}).then((result) => {
			return result * 2;
		});
	}

	//
	xhrFn() {
		return new Promise((resolve, reject) => {
			var xhr = new XMLHttpRequest();
			xhr.open("post", "https://echo-service-new.herokuapp.com/echo", true);

			xhr.onreadystatechange = () => {
				if (xhr.readyState == 4) {
					if (xhr.status == 200) {
						resolve(JSON.parse(xhr.responseText));
					} else {
						reject(xhr.status);
					}
				}
			};

			xhr.send();
		})
			.then((result) => result)
			.catch((err) => err);
	}
}

module.exports = MyClass;
