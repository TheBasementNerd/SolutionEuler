//By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms

var nums = [1, 2];

for (let i=0; i<4000000; i=nums[1]) {
	nums.push(nums.shift() + nums[0]);
}

console.log(nums);