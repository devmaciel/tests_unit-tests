const isAnagram = require("./anagram");

/**
 * Anagram
 * is like SORA -> ROXAS
 * mix the letters
 */

// "typeof"
test("isAnagram function exists", () => {
	expect(typeof isAnagram).toEqual("function");
});

// tobeTruthy
test(" 'cinema' is an anagram of 'iceman' ", () => {
	expect(isAnagram("cinema", "iceman")).toBeTruthy();
});

//
test(" 'Dormitory' is an anagram of 'dirty room##' ", () => {
	expect(isAnagram("Dormitory", "dirty room##")).toBeTruthy();
});

//
test(" 'Hello' is NOT an anagram of 'Aloha' ", () => {
	expect(isAnagram("Hello", "Aloha")).toBeFalsy();
});
