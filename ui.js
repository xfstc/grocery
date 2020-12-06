const ui = {
  clear: function() {
    let items = document.getElementById('items');
    items.innerHTML = '';
  },

  oneItem: function(item) {
    let elem = document.createElement('div');
    elem.className = 'childDiv';

    let desc = document.createElement('p');
    desc.className = 'description';
    let itemDesc = document.createTextNode(item.description);
    desc.appendChild(itemDesc);

    let img = document.createElement('img');
    img.src = item.imageUrl;

    let name = document.createElement('p');
    name.className = 'name';
    let itemName = document.createTextNode(item.name);
    name.appendChild(itemName);

    let price = document.createElement('p');
    price.className = 'price';
    let itemPrice = document.createTextNode(item.price);
    price.appendChild(itemPrice);

    let add = document.createElement('span');
    add.className = 'material-icons';
    let addItem = document.createTextNode('add_circle');
    add.appendChild(addItem);

    elem.appendChild(desc);
    elem.appendChild(img);
    elem.appendChild(name);
    elem.appendChild(add);
    elem.appendChild(price);

    return elem;
  },

  itemsToHTML: function(items) {
    ui.clear();
    let mainDiv = document.getElementById('items');
    for (let i = 0; i < items.length; i++) {
      mainDiv.appendChild(ui.oneItem(items[i]));
    }
  }
};
