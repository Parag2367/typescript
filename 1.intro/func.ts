
function addTwo(num: number) {
    return num + 2
}

function intro(val: string) {
    return 'hi' + val
}

// different wys of creating functions
function loginUser(name: string, email: string, isPaid: boolean) { }

// like this also we can create func
let user = (name: string, email: string) => { }

const getHello = (s: string): string => { return "" }


console.log(addTwo(11))

console.log(intro('Parag'))

console.log(loginUser('Parag', '@gmail.com', false))

console.log(user('Rahul', 't@.com'))

console.log(getHello('Parag'))




export { }