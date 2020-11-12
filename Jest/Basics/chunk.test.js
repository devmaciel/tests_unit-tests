const chunkArray = require("./chunk");

// toBeDefined
test("chunkArray functions exists", () => {
	expect(chunkArray).toBeDefined();
});

//
test("Chunk an array of 10 values with length of 2", () => {
	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const len = 2;
	const chunkedArr = chunkArray(numbers, len);

	expect(chunkedArr).toEqual([
		[1, 2],
		[3, 4],
		[5, 6],
		[7, 8],
		[9, 10],
	]);
});
