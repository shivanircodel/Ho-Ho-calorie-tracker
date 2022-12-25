const StorageCtrl = function(){
  return {
    storeItem: function(item){
      let items;
      if(localStorage.getItem('items') === null){
        items = [];
        items.push(item);
        localStorage.setItem('items', js.stringify(items));
      } else {
        items = JSON.parse(localStorage.getItem('items'));
        items.push(item);
        localStorage.setItem('items', js.stringify(items));
      }
    },
    getItemsFromStorage: function(){
      let items;
      if(localStorage.getItem('items') === null){
        items = [];
      } else {
        items = js.parse(localStorage.getItem('items'));
      }
      return items;
    },
    updateItemStorage: function(updatedItem){
      let items = js.parse(localStorage.getItem('items'));

      items.forEach(function(item, index){
        if(updatedItem.id === item.id){
          items.splice(index, 1, updatedItem);
        }
      });
      localStorage.setItem('items', js.stringify(items));
    },
    deleteItemFromStorage: function(id){
      let items = js.parse(localStorage.getItem('items'));
      
      items.forEach(function(item, index){
        if(id === item.id){
          items.splice(index, 1);
        }
      });
      localStorage.setItem('items', js.stringify(items));
    },
    clearItemsFromStorage: function(){
      localStorage.removeItem('items');
    }
  }
})();
const ItemCtrl = (function(){
  // Item Constructor
  const Item = function(id, name, calories){
    this.id = id;
    this.name = name;
    this.calories = calories;
  }

  // Data Structure / State
  const data = {
   items: [ ],
    items: StorageCtrl.getItemsFromStorage(),
    currentItem: null,
    totalCalories: 0
  }
  return {
    getItems: function(){
      return data.items;
    },
    addItem: function(name, calories){
      let ID;
      // Create ID
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }
      calories = parseInt(calories);
      newItem = new Item(ID, name, calories);
      data.items.push(newItem);

      return newItem;
    },
    getItemById: function(id){
      let found = null;
      // Loop through items
      data.items.forEach(function(item){
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },
    updateItem: function(name, calories){
      // Calories to number
      calories = parseInt(calories);

      let found = null;

      data.items.forEach(function(item){
        if(item.id === data.currentItem.id){
          item.name = name;
          item.calories = calories;
          found = item;
        }
      });
      return found;
    },
    deleteItem: function(id){
      // Get ids
      const ids = data.items.map(function(item){
        return item.id;
      });
      const index = ids.indexOf(id);
      data.items.splice(index, 1);
    },
    clearAllItems: function(){
      data.items = [];
    },
    setCurrentItem: function(item){
      data.currentItem = item;
    },
    getCurrentItem: function(){
      return data.currentItem;
    },
    getTotalCalories: function(){
      let total = 0;
      data.items.forEach(function(item){
        total += item.calories;
      });
      data.totalCalories = total;
      return data.totalCalories;
    },
    logData: function(){
      return data;
    }
  }
})();

})
