//Find the sum of all the multiples of 3 or 5 below 1000

function Multiple(inp, bel) {
	let oup = 0;
	for (let i=0; i<bel; i++) {
		oup += (i%inp[0] == 0 || i%inp[1] == 0) ? i : 0;
	}

	return oup;
}

console.log(Multiple([3, 5], 1000));