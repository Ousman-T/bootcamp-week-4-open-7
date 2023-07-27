class Person {
    #health = 100;
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

    getHealth(){
        return `${this.#health} HP`
    }

    drinkPotion(healthToIncrease){
        if(this.#health + healthToIncrease > 100){
            this.#health = 100;
        }else{
            this.#health += healthToIncrease;
        }
    }

    takeDamage(healthToDecrease){
        if(this.#health - healthToDecrease < 0){
            this.#health = 0;
        }else{
            this.#health -= healthToDecrease;
        }
    }
}




module.exports = Person;