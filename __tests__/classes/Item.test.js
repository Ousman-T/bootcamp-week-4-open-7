

const Item = require('../../classes/Item');

describe('Item', () => {
    it('should set properties correctly', () => {
        let name1 = 'test item';
        let weight1 = 5;

        let item1 = new Item(name1, weight1);

        expect(item1.name).toBe(name1);
        expect(item1.weight).toBe(weight1);
    })
})