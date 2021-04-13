function isNumberOdd(number){
	var x = null;
	number % 2 == 1 ? x = true: x = false;
	return x;
}

function factorial(number){
	var temp = 1;
	for(i = 1; i <= number; i++){
		temp *= i;
	}
	return temp;
}

function changeSpaceToUnderscore(string){
	string = string.replace(/ /g,"_");
	return string;	
}
console.log(isNumberOdd(23));
console.log(factorial(0));
console.log(changeSpaceToUnderscore("create function"))
