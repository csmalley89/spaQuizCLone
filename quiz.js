
  function populatePage (inventory) {
    return new Promise(function (resolve, reject){


    var output = document.getElementById('carContainer');
    var results = "";

    // Loop over the inventory and populate the page

    inventory.forEach(function(car, i){
      if (i % 3 === 0) {
        results += `<div class="row">`
    }
      results += `
      <div class="card col-md-3" style="border-color:${car.color}">
      <h3>${car.make} ${car.model}</h3>
      <h3>Year: ${car.year}</h3>
      <h3>Mileage: ${car.mileage}</h3>
      <h3>Price: $${car.price}</h3>
      <h3>${car.color}</h3>
      <h3>${car.purchased}</h3>
      <p>${car.description}</p>
      </div>`

      if ((i + 1) % 3 === 0) {
    results += `</div>`
    }
    })
    output.innerHTML = results
    })
    resolve(Promise)

    // Now that the DOM is loaded, establish all the event listeners needed


  }

  // Load the inventory and send a callback function to be
  // invoked after the process is complete
  CarLot.loadInventory();
  .then(
    function(inventoryFromLoadInventoryResolve){
      populatePage(inventoryFromLoadInventoryResolve);
      console.log('carPromise', inventoryFromLoadInventoryResolve);
    },
    function(reason){
      console.error("something went wrong", reason);
    })
  .then(function(){
    return CarLot.activateEvents();
  })
