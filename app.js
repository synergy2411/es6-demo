// var greet = () => "Hello";

// console.log(greet());

// // var greet = function(){
// //     return "Hello";
// // }


// var add = (num1, num2) =>{
//     var result = num1 + num2;
//     return  result;
// }

// var addition = (n1, n2) => n1 + n2;

// var double = (...n1) => n1 * 2;



// var person = {
//     firstName : "foo",
//     lastName : "bar",
//     getFullName : function(){
//         var nestedFunc = function() {
//             return this.firstName + " " + this.lastName;
//         }
//         return nestedFunc();
//     }
// }

// console.log(person.getFullName());


// function add(){
//     console.log(arguments[0]);
// }

// add(2,3,4);

// var add = () =>{
//     console.log(arguments);
// }

// add(2,3,4);

// var Person = function(name){
//     this.name = name;
//     this.getName = function(){
//         return this.name;
//     }
// }

// var Person = () => {

// }

// var foo = new Person();

// function add(n1, n2) {
//     return n1 + n2;
// }

// var addtion = function (n1, n2) {
//     return n1 + n2;
// }

// function mystery(){
//     var chooseNumber = function (){
//         return 7;
//     }
//     return chooseNumber();
//     var chooseNumber = function (){
//         return 12;
//     }
// }

// console.log(mystery());


// function b(){
//     console.log(myVar);         //?
// }
// var secVar;
// function a(){
//     var myVar = 200;
//     secVar = 101;

//     b();
// }
// console.log(secVar);

// var myVar = 123;
// a();


// var nestedFunc = (function testClosure(){
//     var x = 4;
//     return function(){
//         return ++x;
//     }
// })();

// // var nestFunc = testClosure();
// console.log(nestedFunc());        //5
// console.log(nestedFunc());        //6
// console.log(nestedFunc());        //
// console.log(nestedFunc());        //

// function buildTicket(transport){
//     var numOfPass = 0;
//     return function(name){
//         return "Hi," + name+ "!\n"+
//             "You are going via " + transport + "\n" + 
//             "Ticet ID #" + (++numOfPass);
//     }
// }

// var ship = buildTicket("Ship");
// console.log(ship("Foo"));
// console.log(ship("Bar"));


//Promise

// function callApi(ms) {
//     var promise = new Promise((resolve, reject) => {
//         if (ms < 3000) {
//             setTimeout(() => {
//                 resolve("Here the data comes..");
//             }, ms);
//         }else{
//             setTimeout(()=>{
//                 reject(new Error("Timeout!"));
//             }, ms)
//         }

//     });
//     return promise;
// };

// callApi(4000).then((res) => {
//     console.log(res);
// })
// .then().catch(err => console.log(err));

// console.log("Running the script...");



//Block Scoping

// function demo (arr){
//     if(arr.length > 2){
//         let name = "NAME";
//         console.log(age);           //?
//     }else{
//         let age = "AGE";
//     }
// }

// demo([1,2,3,4]);

// let funcArray = [];

// for(let i =0; i <2; i++){
//     funcArray.push(function(){return i});
// }

// console.log(funcArray[0]());        //?

// const NAME = "Foo";

// NAME = "Bar";

// console.log(NAME);

// const OBJ = {
//     name : "Foo"
// }

// // OBJ.name = "Bar";

// OBJ = {
//     name : "Bar"
// }

// console.log(OBJ.name);      // Bar

// const arr = ["foo", "bar"];
// arr = ["foo", "bar", "Bar"];

// arr.push("Bam");

// console.log(arr);


// const obj = Object.freeze({
//     name : "Foo"
// });

// obj.name = "Bar";
// obj.age = 32;
// console.log(obj);


// function demo(num1, ...args){
//     console.log(args[0]);
// }

// // demo(1)
// // demo(1,2)
// demo(1,2,3)


// let arr = [2,3,4];
// let newArr = [1, ...arr, 5,6];

// console.log(newArr);


//Destructuring

// let arr = ["foo", "bar", "bam"];
// let [arr1, arr2, arr3] = arr;
// console.log(arr3);

// let obj = {
//     drawText : function(text){console.log("Drawing " + text);},
//     drawCircle : function(r){console.log(Math.PI * r * r, this.name);},
//     name : "Foo",
//     arr : [1,2,3]
// }


// var newObj = {
//     name : "New Name"
// }
// var newObj2 = {
//     name : "Newest Name"
// }

// let {drawCircle : dc, arr : a} = obj;

// a.push(5);

// // console.log(obj.arr);       //?

// dc.bind(newObj)(3);

// dc(2);
// dc.bind(newObj2)(5);
// obj.drawCircle(4);


// let person = {
//     name : "Foo",
//     friends : ["bam", "bar", "bas"]
// }

// let {name : n , friends : [m, r, s]} = person;
// console.log(r);

// let arr = [2,3,4]
// let [arr1, ,  arr3] = arr;
// console.log(arr3);

// let {name, friends} = person;

// let [bam, bar, bas] = friends;

// console.log(bar);


// let arr = [
//     {
//         name : "Foo",
//         friends : ["bar","bam", "bas"]
//     },{
//         name : "Foo1",
//         friends : ["bar1","bam1", "bas1"]
//     }
// ]


// let [,{friends : [, bam1 ]}] = arr;

// console.log(bam1);

// let arr = [[1,2], [3,4], [5,6]];


//Template String

// let firstName = "Foo";
// let age = 32;

// let str = `Hello ${ firstName }, 

//     I 'm ${ age } years old!`;
// // console.log(str);

// let invoiceNo = 123;
// let custName = "Kronos";

// function process(args, ...segments){
//     console.log(args);
//     console.log(segments);
// }

// process `Invoice Number : ${invoiceNo}
//     CustName : ${custName}` ;


//Symbols

// let id = Symbol("id");
// let id1 = Symbol("id");

// console.log(typeof id);
// console.log( id === id1);


// let id = Symbol.for("idMaker");
// console.log(Symbol.keyFor(id));

// let id1 = Symbol.for("idMaker");
// console.log(id === id1);

// let arr = [2,3,4];

// arr[Symbol.isConcatSpreadable] = false;

// console.log([1,2].concat(arr));        // ? [1,2,2,3,4], [1,2, [2,3,4]]


// let Blog = function(){}

// Blog.prototype[Symbol.toStringTag] = "Blog Class";

// let blog = new Blog();

// console.log(blog.toString());


// let arr = [2,4,8];
// arr[Symbol.toPrimitive] = function(){
//     return 12;
// }
// let result = arr + 10;

// console.log(result);

// let person = {
//     "first name" : "Foo"
// }

// // for(let prop of person){
// //     console.log(prop);
// // }

// for(let prop in person){
//     console.log(prop);
// }

// console.log(person["first name"])

// let arr = ["foo", "bar", "bam"];

// let it = arr[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());


// let idMaker = {
//     [Symbol.iterator]: function () {
//         let id = 101;
//         return {
//             next: function () {
//                 let value = id > 105 ? undefined : id++;
//                 let done = !value;
//                 return {
//                     done, value
//                 }
//             }
//         }
//     }
// }

// let it = idMaker[Symbol.iterator]();





// for(let id of idMaker){
//     console.log(id);
// }
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// let range = {
//     from : 1,
//     to : 5,
//     [Symbol.iterator](){
//         let from = this.from;
//         let to = this.to;
//         return {
//             next(){
//                 let result;
//                 if(from < to){
//                     result = {done : false, value : from};
//                     from += 1;
//                     return result;
//                 }
//                 return {done : true, value : undefined};
//             }
//         }
//     }
// }         

// for(let item of range){
//     console.log(item);
// }


// function rangeMaker(start = 1, end = Infinity, step = 1){
//     let nextIndex = start;
//     let counter = 0;
//     const rangeIterator = {
//         [Symbol.iterator] (){
//             return {
//                 next(){
//                     let result;
//                     if(nextIndex < end){
//                         result = {done : false ,value : nextIndex}
//                         nextIndex += step;
//                         counter++;
//                         return result;
//                     }
//                     return {done : true, value : counter};
//                 }
//             }
//         }
//     }
//     return rangeIterator;
// }

// let range = rangeMaker(2, 10, 2);
// let it = range[Symbol.iterator]();
// let result = it.next();

// while(!result.done){
//     console.log(result.value);
//     result = it.next();
// }
// console.log("Steps : " + result.value);


// function* process(){
//     yield 101;
//     yield 102;
// } 

// let it = process();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());

// for(let val of process()){
//     console.log(val);
// }


// console.log(typeof it);


// function* process(){
//     let result = yield;
//     let age = yield;
//     let friends = [yield, yield, yield];
//     console.log(`Result : ${result}, Age : ${age}`);
//     console.log(friends);
// }

// let it = process();
// it.next();
// it.next(101);
// it.next(32);
// it.next("foo");
// it.next("bam");
// it.next("Error");

function* rangeMaker(start=1, end= Infinity, step=1){
    for(let i =start; i< end ; i+=step){
        yield i;
    }
}

for(let val of rangeMaker(1,10,2)){
    console.log(val);
}

