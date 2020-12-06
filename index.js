/* eslint-disable no-undef */
window.onload = function() {
  document.getElementById('home').onclick = function menuFruit() {
    let locaHome = document.getElementById('location');
    locaHome.innerHTML = 'Home';
    ui.itemsToHTML(util.itemsOfAll());
  };
  document.getElementById('fruits').onclick = function menuFruit() {
    let locaFruits = document.getElementById('location');
    locaFruits.innerHTML = 'Fruits';
    ui.itemsToHTML(util.selectedItems('fruits'));
  };
  document.getElementById('drinks').onclick = function menuDrink() {
    let locaDrinks = document.getElementById('location');
    locaDrinks.innerHTML = 'Drinks';
    ui.itemsToHTML(util.selectedItems('drinks'));
  };
  document.getElementById('snack').onclick = function menuSnack() {
    let locaSnack = document.getElementById('location');
    locaSnack.innerHTML = 'Chips & Snacks';
    ui.itemsToHTML(util.selectedItems('chips & snacks'));
  };

  document.getElementById('beaf').onclick = function menuBeaf(e) {
    e.stopPropagation();
    let locaBeaf = document.getElementById('location');
    locaBeaf.innerHTML = 'Meats > Beaf';
    ui.itemsToHTML(util.selectedItems('meat_beaf'));
  };
  document.getElementById('chicken').onclick = function menuChicken(e) {
    e.stopPropagation();
    let locaChicken = document.getElementById('location');
    locaChicken.innerHTML = 'Meats > Chicken';
    ui.itemsToHTML(util.selectedItems('meat_chicken'));
  };
  document.getElementById('pork').onclick = function menuPork(e) {
    e.stopPropagation();
    let locaPork = document.getElementById('location');
    locaPork.innerHTML = 'Meats > Pork';
    ui.itemsToHTML(util.selectedItems('meat_pork'));
  };
  document.getElementById('meat').onclick = function menuMeat() {
    let locaMeats = document.getElementById('location');
    locaMeats.innerHTML = 'Meats';
    ui.itemsToHTML(util.itemsOfMeat());
  };
};
