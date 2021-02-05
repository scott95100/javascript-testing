const chai = require('chai')
const assert = require('chai').assert;

//cool import - destructuring
const {scott, age, isCool, add, object, array, multiply } = require("../index")

//how do i know what to test

//how do i know what to test

//what to look for when testing


//describe what the test is 
describe('Test scott variable', function() {
    it('should return a string as a type', function() {
        //typeOf will let me know what datatype I'm testing
        assert.typeOf(scott, "string");
    })
    it('should return Scott as a result', function() {
        //check to see what scott is equal to
        assert.equal(scott, 'Scott');
    })
    it('should have length of 5', function() {
        assert.lengthOf(scott, 5);
    })
})

describe('test age variable', function() {
    it('should return a number as a type', function() {
        assert.typeOf(age, "number")
    })
    it('should return 40 as a result', function(){
        assert.equal(age, 40)
    })
})

describe('Test add function', function() {
    it('should be a function', function(){
        assert.typeOf(add, 'function')
    })
    it('should return 4', function(){ 
        assert.equal(add(2, 2), 4)      
    })
    it('shoult output the correct datatype', function(){
        assert.typeOf(add(2, 2), "number")
    })
})

describe('Test array variable', function() {
    it('should be an array', function(){
        assert.typeOf(array, "array")
    })
    it('should have 4 different datatypes', function(){
        //set up a variable that will give back a result
        let result = 0;
        for(let i = 0; i < array.length; i++){
            if(array[i].typeOf === 'number'){
                result ++
            }
            if(array[i].typeOf === 'boolean'){
                result ++
            }
            if(array[i].typeOf === 'string'){
                result ++
            }
            if(array[i].typeOf === 'object'){
                result ++
            }
        }
        if(result === 4){
            assert.eaual(result, 4)
        }
    })
})

///TTD test driven development

//write a function multiply that returns a number that is multiplied
//1. write the tests
//2. go to the file where we want the actual code
//3. IMPORTANT: write the code in a way that passes the tests
//4. export the function
//5. import the function into the test file
//6. Run the test (mocha)

describe('Multiply function', function(){
    it('should be a function', function(){
        assert.typeOf(multiply, "function")
    })
    it('should return 9', function(){
        assert.equal(multiply(3, 3), 9)
    })
    it('should have an output with a data type of number', function(){
        assert.typeOf(multiply(2, 3), "number")
    })
})


