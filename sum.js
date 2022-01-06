function sum(num) {
  function helper(num2) {
    return sum(num+num2)
  }
  helper.valueOf = function() {
    return num
  }
  return helper
}

console.log(sum(1)(2).valueOf())