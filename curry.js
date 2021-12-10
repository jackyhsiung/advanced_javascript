// curry
function sum(a, b) {
	return a + b
}

// curriedSum = curry(sum)
// curriedSum(1)(2) = 3

function curry(fn) {
	return function(a) {
		return function(b) {
			return a + b
		}
	}
}

curriedSum = curry(sum)
console.log(curriedSum(1)(2))


// what if the returned currySum should be able to be called with two arguments
// curriedSum(1, 2) = 3
function curry(fn) {
	return (
		function curried(...args) {
			if (args.length === fn.length) {
				return fn(...args)
			}
			else {
				return curried.bind(null, ...args)
			}
		}
	)
}

