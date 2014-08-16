(function(expect, describe, it, window, angular) {

	"use strict";

	describe("mainCtrl", function() {

		var controller, $scope

		beforeEach(angular.mock.module("APP"))

		beforeEach(angular.mock.inject(function($rootScope, $controller) {
			$scope = $rootScope.$new()
			controller = $controller('mainCtrl', {$scope: $scope})
		}));


		it('should exist', function() {
			expect(controller).to.exist
		});

		describe("$scope.greet()", function() {
		
			it('should add a greet method on the scope', function() {
				expect($scope.greet).to.exist
			});


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
					var result = $scope.greet(testCase.input);
					expect(result).to.equal(testCase.expected);

				});
			});
		
		});

	});

})(chai.expect, describe, it, this, angular);