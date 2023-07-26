const Person = require("./Person");

class NPC extends Person {
    static NPC_COUNT = 0;
    
    constructor(name, type, location){
        super(name, type, location);

        NPC.NPC_COUNT ++;
    }

    static tellTime(){
        return `Hello I am an NPC and the time is ${Date.now()}`
    }
}


module.exports = NPC;
    