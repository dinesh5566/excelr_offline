let arr1=[1,2,3,4,5,6,'helo'];

arr1.splice(4,2);
console.log(arr1); // []

//arr1.splice(2,0,'bye','hii');
//console.log(arr1); // [1, 2, 'bye', 'hii', 3, 4, 5, 6, 'helo']

arr1.splice(2,2,'bye','hii');
console.log(arr1); // [1, 2, 'bye', 'hii', 3, 4, 5, 6, 'helo']