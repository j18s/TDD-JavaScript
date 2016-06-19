'use strict';

describe("FizzBuzz program", function()  
{  
	var fb = FizzBuzz;

    it("should print numbers", function()   
     {       	
        expect(fb.printNumbers()).toEqual(100);  
    });  

    it('should print Fizz', function () {
        expect(fb.fizz(30,3)).toBe("Fizz");
    });

	it('should print Buzz', function () {
        expect(fb.buzz(30,5)).toBe("Buzz");
    });


	it('should print FizzBuzz', function () {
	    expect(fb.fizzBuzz(30,15)).toBe("FizzBuzz");
	});
});  