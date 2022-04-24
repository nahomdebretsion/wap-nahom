// let bb=ff.filter(function(el,i,arr){
//     return el>20;});
// undefined
// sum=bb.map(function(el,i,arr){
//     return el+el;});
// console.log(sum);
let num=[1,2];
num.push(3);
console.log(num);
num.pop();
console.log(num);
num.unshift(4);
console.log(num);
num.shift();
console.log(num);
let a, b, c, d, e;
a = [1,2,3];
b = "dog";
c = [42, "cat"];
d = a.concat(b, c); 
e = [...a, b, ...c]; 
([1, 2, 3, 'dog', 42, 'cat']
[1, 2, 3, 'dog', 42, 'cat']
e=[...a, b,c[0], ...c[1]];
[1, 2, 3, 'dog', 42, 'c', 'a', 't']
const person={  // to add new by spread operator
    fname:'josh',
    lname:'man',
    age:20
}
const newperson={...personalbar,age:45};
console.log(newperson);