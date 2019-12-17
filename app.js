const diceArray = [];

class Die {
  constructor(value) {
    this.div = $('<div></div>');
    this.div.addClass('die');
    this.roll();
    $('#diceBoard').append(this.div);

  }
  roll() {
    this.randomVal = Math.floor((Math.random() * 6) + 1);
    $(this.div).append(this.randomVal);
    this.div.attr('id', this.randomVal);

  }

}

let diceBoard = $('#diceBoard')
$('body').append(diceBoard);

$('#gen').click(function () {
  let newDie = new Die();
  diceArray.push(newDie);
  // console.log(diceArray);
})

$('#roll').click(function () {
  $('.die').empty();
  for (i = 0; i < diceArray.length; i++) {
    diceArray[i].roll();
  }
})

$('#sum').click(function () {
  let sum = 0;
  for (let i = 0; i < diceArray.length; i++) {
    sum += diceArray[i].randomVal;
  }
  alert(`Total sum of the die is: ${sum}`);
  
})