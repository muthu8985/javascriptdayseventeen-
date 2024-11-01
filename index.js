// arrow function
let myfun = (a, b) => a * b;
document.write(myfun(2, 3));
// before arrow
let functi = "";
functi = function () {
  return " Hello World";
};
document.write(functi());
// The arrow function
let hello = "";
hello = () => {
  return "Hello World!";
};
document.write(hello());
// Arrow Functions Return Value by Default:
let arrow = "";
arrow = () => "My Hello World!";
document.write(arrow());
//  Arrow function with Parameter
let para = "";
para = (val) => "Hello" + val;
document.write(para("my world"));
// Arrow Function Without Parentheses:
let param = "";
param = (val) => "muthu" + val;
document.write(param("kumar"));

// define a Class Method
class bike {
    constructor(brand,version){
this.brand=brand;
this.version= version;
     }
     versions (){
        const date =new Date();
        return date .getFullYear()- this.year;
     }
 }
 const mybike = new bike ("Tvs",2011);
 document.write("Mybike" + mybike.versions())