// console.log('Hello my name is Munachi')

// let firstName = 'Munachi'
// const age = 13

// console.log(firstName);
// console.log(age);

// let firstNumber = 10;
// let secondNumber = 768;

// console.log(firstNumber / secondNumber);
// let age  = 
const student = [
 {name: "James", score: 50},
 {name: "John", score: 50},
 {name: "Munachi", score: 80},
 {name: "Jack", score: 90},
 {name: "Jill", score: 100},
 {name: "Tom", score: 50},
]

const name = prompt("What is your name");

if (name === student[3].name) {
alert(`your score is ${student[3].score}`);
}else{
    alert("not available");
}

