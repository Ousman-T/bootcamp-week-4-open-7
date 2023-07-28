const Player = require('../../classes/Player');
const Item = require('../../classes/Item');

describe('Player', () => {
    it('Should add an item to a player inventory', () => {
        // arrange
        let player1 = new Player('John', 'Rogue', [8,2], 'Duct Tape');
        let item1 = new Item('Potion', 2);

        // act
        player1.addItem(item1);

        // assert
        expect(player1.inventory).toContain(item1)
    });
    
    it('Should not add an item if it is already in the inventory', () => {
        // arrange
        let player2 = new Player('John', 'Rogue', [8,2], 'Duct Tape');
        let item2 = new Item('Potion', 2);
        player2.addItem(item2);


        // act
        player2.addItem(item2);


        // assert
        expect(player2.inventory).toHaveLength(1);
        expect(() => {
            player2.addItem(item2).toThrow('Already in inventory');
        });
    })
})