const Person = require('./Person');


function main(){
    console.log('You are in the main function');

    let person1 = new Person('Bob', 'Cleric');
    console.log(person1.name);
    console.log(person1.type);
    console.log(person1.location);
}

main();