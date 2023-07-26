const NPC = require('./classes/NPC');
const Person = require('./classes/Person');
const Player = require('./classes/Player');



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


    console.log('================ INHERITANCE ===============');
    let player = new Player('Bertha', 'Cat', [5,5], 'Claws');
    console.log(player.name);
    console.log(player.weapon);


    console.log('============== STATIC METHOD ==========');

    let npc1 = new NPC('Bella', 'Cat', [7, 8]);
    console.log(NPC.NPC_COUNT);

    let npc2 = new NPC('Maevis', 'Cat', [10, 3]);
    console.log(NPC.NPC_COUNT);


    console.log(NPC.tellTime());
}

main();