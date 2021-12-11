for (var i=0; i < 4; i++) {
  setTimeout(function(){
    console.log('I am at index ' + i)
  }, 2000)
}

// how to make the output to be 0 1 2 3
// solution 1
// var is function scope. In our case, we do not have any function,
// so i is in the global environment
// using let keyword, we create a block scope
for (let i=0; i < 4; i++) {
  setTimeout(function(){
    console.log('I am at index ' + i)
  }, 2000)
}

// solution 2
// we create a function, thus we create a function variable environment
for (var i=0; i < 4; i++) {
  (function(closureI) {
    setTimeout(function(){
      console.log('I am at index ' + closureI)
    }, 2000)
  })(i)
}
