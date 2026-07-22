alert("hello");// one time popup


// this code prints hello world
 console.log("Hello World !");

//Variable data type
//console.log is used to log.(print) a message to  the console.

// variables = container

//data type in Js :-

Primitive(7)
 Number , string, boolen ,undefined , Null, BigInt ,Symbol 


// //nn bb ss u -> Primitive  in  JS
 let a= null;
 let b = 3445;
 let c= true //false 
 let d = BigInt("567") + BigInt("3")
 let e = " harry";
 let f = Symbol("I am a nice symbol")
 let g =undefined
 console.log(a,b,c,d,e,f,g);
 consol.log(typeof d);


// //  NONe PRIMITIVE DATA TYPE - Objects in JS

// none primitive ->  object (Array , function)
// object-> collection of values


const item ={
    "harry": false,
    "khus":true,
    "rohan":undefined
}
console.log(item["khus"])

//opertors

let a = 5;
let b = 2;

// operators
let c = a+b;
console.log("a=",a,"& b =",b);
console.log("a+b=",a+b);
console.log("a-b",a-b);
console.log("a*b=",a*b);
console.log("a/b",a/b);
console.log("a%b",a%b); 

//unary operator

let a = 5;
let b = 2;

console.log("a=",a,"& b=",b);
a++;
console.log("a=",a);


//conditional statements

// 1) if statment

// 2) if-else

// 3)  if    else-if      else

let age = 25;
if(age>=18){
    console.log("you can vote");
}

if(age<18){
    console.log("you cannot vote");
}


let mode = "dark";
let color;

if(mode === "dark"){
    color="black";
}


if(mode === "light"){
    color="white";
}

console.log(color);


let mode = "dark";
let color;

if(mode === "dark"){
    color="black";
}


// else if(mode === "light"){
//     color="white";
// // }

// // console.log(color);

// //  ternary opertors

// // condition? true output: false output;

// // let age = 18;

// // age>=18? "adult":"not adult";  // simpler , compact if-else

// MDN Docs

//switch statment


// practice Question

// Q1
let name = prompt("hello");
console.log(name);

// Q2
let num = prompt("enter a number: ");
if(num % 3===0){
    console.log(num,"is a multiple of 3");
}
else{
    console.log(num,"is not a multiple of 3");
}

// Q3

let score = 95;
let score = prompt ("enter you  score (0-100):");
if(score >= 90 && score <= 100){
   grade="A";
}
else if(score >= 70 && score <= 89){
   grade="B";
}
else if(score >= 60 && score <= 69){
    grade="C";
}
else if(score >= 50 && score <= 59){
     grade="D";
}
else if(score >= 0 && score <= 49){
    grade="F";
}
console.log("according to you scores , you  grade was : ", grade)


//loop in js

//For loop

//print 1 to 5
for( let i = 1; i <= 5; i++){
    console.log("i = " , i);  //5 excute
}
console.log("loop has ended");

//Calculate  sum of 1 to 5

let sum = 0;
let n =5;
for(let i=1; i<=n; i++){
    sum = sum + i; // sum = 15
}
console.log("sum = ", sum);


// Infinte loop :- A loop that never ends

//While loop

let i = 1;
while(i <= 10 ){
    console.log(" Apna College ");
    i++;
}

// do-while loop  :- at leat 1 time run 

let i = 1;
do{
    console.log("i = " , i);
    i++;
}while(i <= 5 );

 // For-of  loop  :-  Strings , Array

let str = "JavaScript ";
let size = 0;

for(let val of str){
    //iterator -> charaters
    console.log("val = ", val);
    size++;
}
console.log("string size = ", size);   //10



//  for-in loop :-  Object , Array

let student = {
    name: "Rahul Kumar",
    age: 20,
    cgpa:9.00,
    isPass: true,
};

for(let key in student ){
    console.log( "key= ", key, "value=", student[key]);
}


// Practice Q1

for(let num = 0; num<= 100 ; num++)
{
    if(num%2===0){//even number
      console.log("num =" , num);
    }
    
}

// Q2

let gameNum = 25;
let userNum =   prompt("Guess the Game number : ");

while(userNum != gameNum){
    userNum = prompt("You entered wrong number . Guess again: ");
}

console.log("congratulations , you entered the right number");


// Strings in JS

// string is a sequence of characters used to represent text

let str1 = "Javascript"  //create string
let str2 = 'Javascript'


// inbuilt properties     functions-> methods    

let  obj = {
     item: "pen",
     price: 10,
};

let output = `the cost of ${obj.item} is ${obj.price} rupees`;
console.log(output);

console.log("the cost of" , obj.item, "is", obj.price, " rupees");
//  Template Literals
// a way  to have embedded expressions in strings

// string interpolation --> ${}
 
let specialString = `This is a template literal`;
console.log( specialString);
console.log(typeof specialString);


// escape character  => \n (next line)  & tab space  => \t
let str = "Apna\tCollege" //12    
console.log(str.length);

// string methods in js  :- build in function   string is immutable(not change)

str.toUpperCase() // -> new string with new val
let str = "ApnaCollege";
str = str.toUpperCase();
console.log(str);

str.toLowerCase()
str.trim() //removes whitespaces

let str = "     Apna College  Js    ";
console.log(str.trim());

str.slice(start,end) // returns part of string
str1.concat(str2)//joins str2 with str1
str.replace(searchVal,newVal)
str.charAt(idx)


let str = "12345678";
console.log(str.slice(1,3));//12

let fullName = prompt("enter your fullname without spaces");
let username = "@" + fullName + fullName.length;
console.log(username);



// FUNCTION IN JS

// Arrow funnction
const hello = () =>{
    console.log("hey how are u")
    return "Hi";
}

function onePlusAvg(x,y){
    return 1+ (x + y)/2

}
const sum = (p , q)=>{
    return p+q
}

let a = 1;
let b  = 2;
let c = 3;

let v = hello();
console.log(v);

console.log("one plus Average of a and b is " ,onePlusAvg(a,b));
console.log("one plus Average of b and c is " ,onePlusAvg(b,c));
console.log("one plus Average of a and c is " ,onePlusAvg(a,c));
console.log(sum(9,7))


// Array in JS
// -> mutable  & can be changed
// array  are variable  which can hold more then one value

let marks =[97,56 , false , "Not Present"]
console.log(marks);
console.log(marks [4])=89;
console.log(marks[4]);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[6]);  //undefine

console.log(typeofmarks); // return typr is object

// Array methods

let num = [1,2,3,4,6,7,8]
let b = num.toString() //b is now a string
consolelog(b,typeof b);
let c = num.join(" and ")
console.log(c,typeof c)
let r = num.pop() // pop returns the popped element
console.log(num,r)
let a = num.push(22) 
console.log(num,a)
let  d = num.shift()  // remove an element from  the  start of the array
console.log(d,num)
// let  d = num.unshift(74)  adds element to the beginning return new arrr length
console.log(d,num)

// forEach loop--> call a function once for eah arr element

const a = [1,2,3]
a.forEach((value ,index,array)=>{
//function logic
})



//  Array Map()  method  -->  create a new arr by perfoming som opertion on each element
let arr = [22,33,44]
// console.log(arr);
let a =arr.map((value , index)=>{
   console.log(value,index,array)
   return value + 1
})
console.log(a)

// Array  filter method :-

// filter an arr  with values  that passes a test creates a new arr


let aar2 = [22,33,44,1,3,4]
let a2 = arr2.filter((a)=>{
  return a<10
})
console.log(a2,arr)


// Array reduce method  :- return value
// reduces an arr to a single value

let aar3 = [22,33,44,1,3,4]

let newarr3 = arr3.reduce((h1, h2)=>{
    return h1 + h2
}) 
console.log(newarr3)

// other wa

let aar2 = [1,2,3,4,5,6]
const reduce_func = (h1,h2)=>{
    return h1 + h2
}
let newarr3 = arr3.reduce(reduce_func)
console.log(newarr3)











