/*console.log("script is running");
let obj1={
    "name":"Dinesh Kumar",
    "age": 25,
    "city": "Ananthapur"
};
let json1=JSON.stringify(obj1);
console.log(obj1);
console.log(json1);

let json2 = '{"name":"Dinesh Kumar","age":25,"city":"Ananthapur"}';
let obj2=JSON.parse(json2);
console.log(json2);
console.log(obj2);

const nested_obj={
    "name" : "Dinesh Kumar",
    "age" : 25,
    "city" : "Ananthapur",
    "skills" : ["Javascript","python","Java"],
    "Adrress":{
        "street":"123 main st",
        "city":"Any town",
        "state":"CA",
        

    }
};
let nested_json=JSON.stringify(nested_object);
console.log(nested_json);

console.log(nested_object.name);
console.log(nested_object["age"]);

async function fetchData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
    console.log(data.name);
    console.log(data.company.name); 
    console.log(data.address["street"]);  
}
fetchData();
*/
const json1={
    "name":"Dinesh Kumar",
    "age": 25,
    "city": "Ananthapur"

}
const json2={
    "email":"kjkhjd987@example.com",
    "phone":"1234567890"
}
console.log(json1);
console.log(json2);
const merged_json={...json1,...json2};
console.log(merged_json);
