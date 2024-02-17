const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function () {
  it("should foo", function () {
    const gildedRose = new Shop([new Item("foo", 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toBe("foo");
  });

  it("should reduce 2 quality when item is Conjured", function () {
    const conjured = new Shop([new Item("Conjured Mana Cake", 3, 6)]);
    const items = conjured.updateQuality();
    expect(items[0].name).toBe("Conjured Mana Cake");
    expect(items[0].sellIn).toBe(2);
    expect(items[0].quality).toBe(4);
    conjured.updateQuality();
    expect(items[0].name).toBe("Conjured Mana Cake");
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(2);
    conjured.updateQuality();
    expect(items[0].name).toBe("Conjured Mana Cake");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(0);
  });

  it("should reduce 2 quality when sell by date has passed", function () {
    const food = new Shop([new Item("food", 1, 10),]);
    const items = food.updateQuality();
    expect(items[0].name).toBe("food");
    expect(items[0].sellIn).toBe(0);
    expect(items[0].quality).toBe(9);
    food.updateQuality();
    expect(items[0].name).toBe("food");
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(7);
  });
});
