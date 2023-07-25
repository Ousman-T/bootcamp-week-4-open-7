class Person {
    constructor(name, type, location){
        this.name = name;
        this.type = type;
        this.location = location || [0,0];
    }

    introduce(){
        return `Hello, my name is ${this.name}`;
    }

    updateX(newX){
        this.location[0] = newX;
    }

    updateY(newY){
        this.location[1] = newY;
    }
}




module.exports = Person;