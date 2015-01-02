describe("fetchAndRenderExercises", function() {
	beforeEach(function() {
		fetchAndRenderExercises();
	});
	
		it("should fetch the exercises for that day", function() {
			expect(fetchAndRenderExercises()).toBeDefined();
		});
		it ("does not start with a winner", function() {
			expect(board.winner).toBe(null);
		});
	});

describe("thisIsATest", function() {
	it("should return hello world", function() {
		expect(thisIsATest()).toBe("hello world");
	});
});