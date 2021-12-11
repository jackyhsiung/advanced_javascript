// Lexical Scope
// lexical: where something is written
// the inner function has access to the variables defined in the outer scope
function a() {
  const str = "Defined in function a"
  function b() {
    console.log(str)
  }
  b()
}

a()

// Closure
// the inner function still has the access to the variable defined in the outer scope
// even if the outer function is popped from the call stack
// function is first class citizen + lexical scope -> closure
function c() {
  const str = "Defined in function c"
  function d() {
    console.log(str)
  }
  return d
}
const d = c()
d()
