const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {

  describe("norrmal items", function() {
    it("At the end of each day,lowers both values for every item", function() {
      const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 10, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(19)
    });
   
    it("Once the sell by date has passed,Quality degrades twice as fast", function() {
      const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 0, 20)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(18)
    });
    it(" The Quality of an item is never negative", function() {
      const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 5, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(4);
      expect(items[0].quality).toBe(0)
    });
    it(" The Quality of an item is never more than 50", function() {
      const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(9);
      expect(items[0].quality).toBe(50)
    });
  });
  describe("Aged Brie", function() {
    it("increases in Quality the older it gets", function() {
      const gildedRose = new Shop([new Item("Aged Brie", 2, 0)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(1);
      expect(items[0].quality).toBe(1)
    });
 
  });
  describe("Sulfuras", function() {
    it("being a legendary item, never has to be sold or decreases in Quality", function() {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 0, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(0);
      expect(items[0].quality).toBe(80)
    });
    it("being a legendary item, never has to be sold or decreases in Quality", function() {
      const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
      const items = gildedRose.updateQuality();
      expect(items[0].sellIn).toBe(-1);
      expect(items[0].quality).toBe(80)
    });
 
  });
describe("Backstage passes", function() {
  it("Quality drops to 0 after the concert", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0)
  });
  it("Quality increases by 2 when there are 10 days or less", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 9, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(8);
    expect(items[0].quality).toBe(12)
  });
  it("Quality increases by 3 when there are 10 days or less", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 3, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(13)
  });
});
describe("Conjured Mana Cake", function() {
  it(" degrade in Quality twice as fast as normal items", function() {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(4)
  });

});

});
