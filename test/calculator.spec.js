var should = require('should');
var calculator = require('../source/calculator')
describe('calc spec', function(){
	it('should calc exists', function(){
		should(calculator).be.ok;
	});

	it('should return 0 for empty string', function(){
		var result = calculator.add('');
		should(result).equal(0);
	});

	it('should return 1 for 1', function(){
		var result = calculator.add('1');
		should(result).equal(1);
	});

	it('should return 2 for 2', function(){
		var result = calculator.add('2');
		should(result).equal(2);
	});

	it('should return 3 for 1,2', function(){
		var result = calculator.add('1,2');
		should(result).equal(3);
	});

	it('should return 10 for 1,2,3,4', function(){
		should(calculator.add('1,2,3,4')).equal(10);
	});

	it('should return 6 with new line delimiter', function(){
		should(calculator.add('1\n2,3')).equal(6);
	})

	describe('different delimeters', function(){
		it('should return 6 with custom delimiter', function(){
			should(calculator.add('//;\n1;2;3')).equal(6);
		})
	})

	describe('negative numbers', function(){
		it('should throw exception', function(){
			(function(){
				calculator.add('1,-2');
			})
			.should.throw('negative numbers not allowed')
		});
	});
});