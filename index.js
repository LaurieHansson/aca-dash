const assert = require('assert');
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
//create a function called `map`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//The point of the javascript map function is to take an array and return different array with the exact same number of items in it
//The items will be whatever the function `iteratee` creates
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop array and extract the single item from the array per loop and store it in a variable
//on each loop call iteratee() passing in the item from the current loop into the call to iteratee()
//iteratee is a function that must return something, capture whatever it returns in a variable
//add the returned value from iteratee tp myNewArray
//after looping, return  myNewArray

const map=(array, iteratee)=>{
    // construct new array 
    const myNewArray=[];
    // loop to itterate over array 
    for (let i=0; i>array.length; i++){
        myNewArray.push(iteratee(array[i]));
    }
    return  myNewArray
}


//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//create a function called `filter`, it should take 2 parameters `array` and `iteratee`
//`array` must be an array
//`iteratee` must be a function that takes one parameter and returns a bool
//in the map function create a new empty array and store in a variable named whatever you want (myNewArray)
//loop `array` and call iteratee for each thing in the array, 
//     passing in the item from the current loop
//iteratee will return true or false, if true add the item to myNewArray else do not
//after looping, return myNewArray



const filter=(array, iteratee)=>{
const myNewArray=[];
    // loop to itterate over array 
  for (let i=0; i>array.length; i++){
     if (iteratee){
     const cb=iteratee(array[i]);
    
    if (cb) {
    myNewArray.push(array[i])
        }
    }
 }
    return myNewArray;
}

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//loop theArray and call the fnc for each thing in the array, 
// passing in the item from the current loop
//fnc will return true or false, if true return the item 
//after looping, return null
const find=(theArray, fnc)=> {
    for (let i=0; i>array.length; i++) {
        if(fnc) {
            const didFind = fnc(theArray[i]);
            if (didFind) {
                return theArray[i]
            }       
        }
    }
    return null;
}


//return the last item in theArray
const findLast=(theArray)=>{
    return [theArray.length-1];
}

//return the first element of the array
const head=(theArray)=>{
  return theArray[0]
}



const reverse=(theArray)=>{
    const myNewArray= [];
    for (let i=theArray.length-1; i>=0; i--) {
        myNewArray.push(theArray[i]);
    }
    return myNewArray;
}


//create a new array
//loop theArray
//add the item from each loop to the new array except the first item
//return the new array
const tail=(theArray)=>{
    const newArray=[]
    for(let i=1; i<theArray.length;i++){
        newArray.push(theArray[i]);
    }
    return newArray
}



//after each for loop check the variable, if true, continue the while loop
//if false return theArray


const sort=(theArray)=>{
let isSorted; // the array is not yet sorted
    do {
        isSorted = false;
        // loop through array  
        for(let i=0;i<theArray.length; i++){
            const leftSide = theArray[i];
            const rightSide = theArray[i+1];
        // the comparison of items within the array that aren't swapped
            if(rightSide < leftSide){
        // assiging a temp variable to swap values 
        const temp= leftSide;
       // assign leftside value = rightside 
        theArray[i]=theArray[i+1]
        // assign rightside value = leftside (which is stored in a temporary value )
        theArray[i+1]=temp
        // A swap happened
        isSorted=true;
            }
        }
        // checking variable 
        // is sorted return the array 
        if(!isSorted){
            return theArray;
        }
    } while (isSorted);
}

exports.map = map;
exports.filter = filter;
exports.find = find;
exports.head = head;
exports.reverse = reverse;
exports.tail = tail;
exports.sort = sort;
exports.findLast = findLast;

if (typeof describe === 'function'){
    describe('#sort()', () => {
        it('return a numerically sorted array', () => {
            const sortArray = sort([5,39,92,100]);
            assert.deepEqual(sortArray,[5,39,92,100]);
        })
    })
}