function sayHello(nameOfPerson, age){
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age);
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("lynn", 21);

function plus(firstNumber, secondNumber){
    console.log(firstNumber + secondNumber);
}
plus(8, 60);

function divide(a, b){
    console.log(a / b);
}
divide(98, 20);


const player = {
    name: "nico",
    sayHello: function(otherPersonsName){
        console.log("hello! " + otherPersonsName + " nice to meet you");
    }
}
console.log(player.name);
player.sayHello("lynn");

// How we can sent information to our function