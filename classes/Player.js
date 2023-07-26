const Person = require("./Person");

class Player extends Person {
    constructor(name, type, location, weapon){
        super(name, type, location)
        this.weapon = weapon;
    }
}


module.exports = Player;