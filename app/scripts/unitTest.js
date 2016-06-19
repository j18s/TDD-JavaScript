var FizzBuzz={

	printNumbers: function(){
		let counter=0;
		for (var num = 1; num < 101; num++) {
			let _fb =this.fizzBuzz(num,15);
			let _fizz=this.fizz(num,3);
			let _buzz = this.buzz(num,5);
			let output = _fb||_fizz||_buzz;			
			if (output != "") {
				console.log(output);
			}
			else
			{
				console.log(num);
			}			
			counter++;
		};
		return counter;
	},

	fizz: function(number, mod){
		if (number%mod ===0 ) {
			return "Fizz";
		};
		return "";
	},

	buzz: function(number, mod){
		if (number%mod ===0 ) {
			return "Buzz";
		};
		return "";
	},
	fizzBuzz: function(number, mod){
		if (number%mod ===0 ) {
			return "FizzBuzz";
		};
		return "";
	}
};
