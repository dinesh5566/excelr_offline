//Accessing Element with getElementById()
//let id=document.getElementById("id");
//console.log(id);
let heading=document.getElementById("heading");
        heading.style.color='red';
        console.log(heading);


let heading2=document.getElementById("heading2");   
        for(let e of heading2){
            e.style.color='green';
        }
        console.log(heading2);

let heading3=document.getElementById("h3");
for(let e of heading2){
    e.style.color='green';
}        
console.log(heading3);

//accessing eleme
let p1=document.queryselecctor(".p1");
p1.style.color='red';
let p1=document.queryselecctorAll(".p1");
for (let e of pList){
    e.style.fontSize='40px';
}

//creatio n of element
let pCreate=document.createElement('p');
pCreate.textContent="This is a new paragraph created by JS";

let container=document.getElementById('container');
container.appendChild(pCreate);
