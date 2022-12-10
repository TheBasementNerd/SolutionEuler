//Find the sum of all the multiples of 3 or 5 below 1000

function Multiple(inp, bel) {
	let oup = 0;
	for (let i=0; i<=bel; i += inp) {
		oup += i;
		console.log(i);
	}

	return oup;
}

console.log(Multiple(3, 1000) + Multiple(5, 1000));