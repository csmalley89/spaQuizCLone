CarLot =(function(carLot){
  carLot.activateEvents = function() {
    var cards = document.querySelectorAll(".card")
    cards.forEach(function(card){
      card.addEventListener('click', function(evt){
        var userInput = document.querySelector('#userInput')
        userInput.value = ''
        userInput.focus()
        CarLot.resetCards(cards)
        CarLot.styleCard(card, "pink")
        CarLot.mirrorText(card, userInput)
      })
    })
  }
  return carLot;
})(CarLot);
