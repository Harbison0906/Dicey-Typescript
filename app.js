const diceArray = [];

class Die {
  constructor(value) {
    this.div = $('<div></div>');
    this.div.addClass('die');
    this.roll();
    $('#diceBoard').append(this.div);

  }
  roll() {
    let randomVal = Math.floor((Math.random() * 6) + 1);
    $(this.div).append(randomVal);
    this.div.attr('id', randomVal);    
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

diceSum = function(total, num) {
    return total + num;
  }

  total = function() {
    diceArray.reduce(diceSum, 0);

  }

$('#sum').click(function () {
  sum = 0
  for (i = 0; i < diceArray.length; i++) {
    sum += diceArray[i];
  }
  console.log(diceArray);
})