/* Add any JavaScript you need to this file. */
const util = {
  formatDollars: function(number) {
    return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'CAD' }).format(
      number / 100
    );
  },

  formatPrice: function(item) {
    let newItem = Object.create(item);
    if (newItem.category === 'drinks' || newItem.category === 'chips & snacks')
      newItem.price = util.formatDollars(newItem.price);
    else newItem.price = util.formatDollars(newItem.price) + '/kg';
    return newItem;
  },

  itemsOfAll: function() {
    let allItems = [];
    for (let i = 0; i < window.items.length; i++) {
      allItems.push(this.formatPrice(window.items[i]));
    }
    return allItems;
  },

  selectedItems: function(Category) {
    let results = [];
    let allItems = util.itemsOfAll();
    for (let i = 0; i < allItems.length; i++) {
      if (allItems[i].category === Category) {
        results.push(allItems[i]);
      }
    }
    return results;
  },

  itemsOfMeat: function() {
    let meat = [];
    let allMeat = util.itemsOfAll();
    let reg = /^meat_/;
    for (let i = 0; i < allMeat.length; i++) {
      if (reg.test(allMeat[i].category)) {
        meat.push(allMeat[i]);
      }
    }
    return meat;
  }
};
