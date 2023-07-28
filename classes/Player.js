const Person = require("./Person");

class Player extends Person {
    constructor(name, type, location, weapon){
        super(name, type, location)
        this.weapon = weapon;
        this.inventory = [];
    }
    addItem(item){
        if(this.inventory.includes(item)){
            throw new Error('Already in inventory')
        }else{
            this.inventory.push(item);
        }
    }
}


module.exports = Player;