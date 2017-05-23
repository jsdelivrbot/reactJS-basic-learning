function add(a, b) {
    return a + b;
}

console.log(add(1, 2));

var toAdd = [9, 5];

console.log(add(...toAdd));

var groupA = ['jen', 'ben'];
var groupB = ['Viki'];
var final = [...groupB, 3, ...groupA];

console.log(final);

var personA = ['Andrew', 25];
var personB = ['Dom', 53];

function greet(name, age) {
    console.log('Hi ' + name + 'you are ' + age);
}

greet(...personA);
greet(...personB);

var names = ["mike", "Jack"];
var final = ['Andrew', ...names];

final.forEach(function (name) {
    console.log('Hi ' + name);
});