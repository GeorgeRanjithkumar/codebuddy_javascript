// level 2

//1=>

let arr =[1,2,3];
let arr = JSON.parse(`[${arr}]`.replaceAll([2,3,4]));

//2 =>

console.log(1 + +"2" + 3);
console.log(typeof "2");
console.log(typeof(+"2"));

//3=>
let codebuddy = {
    name: 'Elie',
    age: 'Pro',
    displayInfo : function(){
        console.log(`${codebuddy.name},${codebuddy.age}`);
    }
}
codebuddy.displayInfo();