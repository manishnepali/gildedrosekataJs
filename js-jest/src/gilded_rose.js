class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
/**
 * The updateQuality function is iterating through the items array and calling the decreaseQualityValue
 * function if the item is not Aged Brie or Backstage passes to a TAFKAL80ETC concert, and calling the
 * increaseQualityValue function if the item is Aged Brie or Backstage passes to a TAFKAL80ETC concert
 * @returns The items array.
 */
  updateQuality() {
    /* A for loop that is iterating through the items array. */
    for (let i = 0; i < this.items.length; i++) {
      this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert'
      ? this.decreaseQualityValue(i)
      : this.increaseQualityValue(i)
      this.decreaseSellInValue(i);
      /* This is checking if the sellIn value is less than 0, and if it is, then it is calling the
      updateQuality function again. */
      this.items[i].sellIn < 0
      ? this.expierdUpdate(i)
      : null
    }
    return this.items;
  }

/**
 * If the item is not Sulfuras, decrease the sellIn value by 1.
 * @param i - the index of the item in the items array
 */
  decreaseSellInValue(i){
    if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
      this.items[i].sellIn = this.items[i].sellIn - 1;
    }
  }

/**
 * If the item's quality is greater than 0, and the item's name is not Sulfuras, then decrease the
 * item's quality by 1
 * @param i - the index of the item in the items array
 */
  decreaseQualityValue(i){
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      
  }

/**
 * If the item's quality is less than 50, increase the quality by 1. If the item is a backstage pass,
 * increase the quality by 2 if the sellIn is less than 11, and increase the quality by 3 if the sellIn
 * is less than 6
 * @param i - the index of the item in the items array
 */
  increaseQualityValue(i){     
    if (this.items[i].quality < 50) {
      this.items[i].quality = this.items[i].quality + 1;
      if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].sellIn < 11) {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 2;
          }
        }
        if (this.items[i].sellIn < 6) {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 3;
          }
        }
      }
    }
            
  }
  /**
   * If the item is not Aged Brie, and it is not a Backstage pass, and its quality is greater than 0,
   * and it is not a Sulfuras, then decrease its quality by 1
   * @param i - the index of the item in the array
   */
  expierdUpdate(i){
    if (this.items[i].name != 'Aged Brie') {
      if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } 
      else {
        this.items[i].quality = this.items[i].quality - this.items[i].quality;
      }
    } 
    else {
      if (this.items[i].quality < 50) {
        this.items[i].quality = this.items[i].quality + 1;
      }
    }
  }
}

module.exports = {
  Item,
  Shop
}
