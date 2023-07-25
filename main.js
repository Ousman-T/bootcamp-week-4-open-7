const Person = require('./Person');


function main(){
    console.log('You are in the main function');

    let person1 = new Person('Bob', 'Cleric');
    console.log(person1.name);
    console.log(person1.type);
    console.log(person1.location);

    console.log(person1.introduce());

    let person2 = new Person('Ava', 'Bard', [1,1]);

    person2.updateX(5);
    person2.updateY(3);

    console.log(person2.location);
}

main();