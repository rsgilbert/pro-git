type Test = Record<string, () => number>

let t = { 
    ss: () => 5
}

console.log(t.ss())

console.log('hi')
console.log('hi2')