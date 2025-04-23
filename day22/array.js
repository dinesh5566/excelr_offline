//let arr1=[1,2,3,4,5,6,'helo'];
//console.log(arr1); // [1, 2, 3, 4, 5, 6, 'helo']

//arr1.splice(4,2);
//console.log(arr1); // []

//arr1.splice(2,0,'bye','hii');
//console.log(arr1); // [1, 2, 'bye', 'hii', 3, 4, 5, 6, 'helo']

//arr1.splice(2,2,'bye','hii');
//console.log(arr1); // [1, 2, 'bye', 'hii', 3, 4, 5, 6, 'helo']
//arr1.splice(2,0,'bye','hii');
//console.log(arr1); // [1, 2, 'bye', 'hii', 3, 4, 5, 6, 'helo']
//arr1.splice(2,2,'bye','hii');
//console.log(arr1); // [1, 2, 'bye', 'hii', 3, 4, 5, 6, 'helo']

//some()
 //let arr1=[1,2,3,4,5,6,'hello'];
 //let output=arr1.some(
 //   (e)=>e%2==0//even number
 //)
  //  console.log(output); // true
//let arr1=[1,2,3,4,5,6,'hello'];
//let output=arr1.findIndex(
//    (e)=>e%2==0//even number
//)  
 //   console.log(output); // true
 let arr1=[1,2,3,4,5,6,'hello'];
let output=arr1.find(
    (e)=>e%2==0//even number
)
    console.log(output); // 2
    /**
     * the reverse() 
     * method reverses the elements of an array in place.
     *  -it reverse the original array
     *  -it returns the reference to the same array.
     */
let arr2=[1,2,3,4,5,6,'hello'];
console.log(arr2); // 1
arr2.reverse();
console.log(arr2); // 6

/**
 * toString() method
 *  the tostring() method returns a string representing the specified array and its elements.
 *  -it does not change the original array.
 * returns string with comma separated values.
 */
let arr3=[10,20,30];
console.log(arr3); // 1,2,3,4,5,6,'hello'
let output3=arr3.toString();
console.log(output3); // 10,20,30
console.log(typeof output3); // string
