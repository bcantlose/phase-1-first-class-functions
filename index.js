
const receivesAFunction = (callback) => {

    callback()
}


receivesAFunction(() => {
    console.log("Hello World")
})
const addNumbers = (a, b) => { return a + b }

const returnsANamedFunction = () => { return addNumbers }



const returnsAnAnonymousFunction = () => { return function() {} }
