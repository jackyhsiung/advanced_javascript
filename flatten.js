const arr = [1, 2, [3, [4]]]

// const flattened = arr.reduce((cur, val) => {
//  console.log('val', val)
//  return cur.concat(val)
// }, [])


function flat(arr, depth) {
  if (depth === 0) {
    return arr
  }

  let res = [];
  arr.forEach(item => {
    if (Array.isArray(item) && depth > 0) 
      res = res.concat(flat(item, depth-1))
    else
      res.push(item)
  })

  return res
}

console.log(flat(arr, 1))

function flatWithReduce(arr, depth) {
  res = arr.reduce((cur, item) => {
    if (Array.isArray(item) && depth > 0) {
      cur = cur.concat(flat(item, depth-1))
    } else {
      cur.push(item)
    }
    return cur
  }, [])
  return res
}

console.log(flatWithReduce(arr, 1))


const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  },
  f: [1, 2, 3],
  g: false,
}

function flattenObj(obj) {
  let res = {}
  for (let key in obj) {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      subFlattenedObj = flattenObj(obj[key])
      for (let subKey in subFlattenedObj) {
        const newKey = key + '_' + subKey
        res[newKey] = subFlattenedObj[subKey]
      }
    } else {
      res[key] = obj[key]
    }
  }

  return res
}

console.log(flattenObj(obj))