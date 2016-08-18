var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory
    },
    loadInventory: function (callback) {
      return new Promise (function  (resolve, reject){
        var inventoryLoader = new XMLHttpRequest();
          inventoryLoader.open('GET', 'inventory.json')
          inventoryLoader.send()

          inventoryLoader.addEventListener("load", function () {
            inventory = JSON.parse(this.responseText).cars
            resolve(inventory);
        });
      })
    };
  }
})();
