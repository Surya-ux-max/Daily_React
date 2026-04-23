// console.log("Hello Developer! Welcome to learning JavaScript.");
let name = "Suri";
let age = 25;
const Role = "AI Engineer";

console.log("Hello Developer! Welcome to learning JavaScript.");
console.log(typeof name);       // typeof in javascript will give the data type of the variable used in the console log
console.log(typeof age);        // console.log will display the message the user is entering
console.log(typeof Role);


console.log("Name: " + name);
console.log("Age: " + age);
console.log("Role: " + Role);

console.log(10+10); // this will give us the sum of 10 and 10 which is 20
console.log(10-5);
console.log(10*5);
console.log(10/2);
console.log(10%3); // this will give us the remainder of 10 divided by 3 which is 1

let ageofsurya = 20;
ageofsurya -= 1;
if(ageofsurya > 18){
    console.log("Surya is an adult.");
}
else{
    console.log("Surya is a minor.");
}

let number = 10;
for( let i = 1;i<=number;i++){
    console.log("number : ",i);
}