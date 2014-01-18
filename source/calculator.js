var calculator = {
		add: function(str){

			if (str === '' || str === NaN)
				return 0;

			var delimiter = ',';
			if (str.indexOf('//') == 0){
				var delimiter = str.substr(2, 1);
				str = str.substr(4);
			}

			var numbers = str.split(new RegExp('\n|' + delimiter));
			var integers = numbers.map(function(value){
				return +value;
			});

			var negatives = integers.some(function(value){
				return value < 0;
			})

			if (negatives){
				throw new Error('negative numbers not allowed');
			}

			var sum = integers.reduce(function(prev, current){
				return prev + current;
			})

			return sum;
	}
};

module.exports = calculator;