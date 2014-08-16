(function(expect, describe, it, window) {

	"use strict";

	describe("app", function() {

		it("should exist", function() {

			expect(window.APP).to.exist;

		});


		describe("greet()", function() {

			var app = window.APP;

			it("should return hello <name> for the name passed", function() {

				var cases = [{
					input: "Dries",
					expected: "hello Dries"
				}, {
					input: "blabla",
					expected: "hello blabla"
				}, {
					input: "23",
					expected: "hello 23"
				}, {
					input: 23,
					expected: "hello 23"
				}];

				cases.forEach(function(testCase) {

					var result = app.greet(testCase.input);
					expect(result).to.equal(testCase.expected);

				});

			});

		});

	});

})(chai.expect, describe, it, this);