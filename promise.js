const promise = new Promise((resolve, reject) => {
  console.log('Called')
  const value = 1;
  const done = true;
  if (done) {
    resolve(value)
  } else {
    reject('Something wrong')
  }
})

// promise.then((value) => console.log(value))

// async function asyncCall () {
//   const result = await promise
//   console.log(result)
//   return 1
// }

// console.log(asyncCall())

function apiCall() {
  return new Promise((resolve, reject) => {
    const value = 'secret message'
    setTimeout(() => {
      resolve(value)
    }, 1000)
  })
}

async function getMessage() {
  const message = await apiCall();
  console.log(message)
}

(function init() {
  getMessage()
  console.log('other things')
})()