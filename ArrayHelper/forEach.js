var colors = ['red','green','blue'];

colors.forEach( function(color){
		console.log(color);
 });

var numbers = [1,2,3,4,5];

var sum = 0;

function adder(number){
	sum += number;
}

numbers.forEach(adder);

console.log(sum);
