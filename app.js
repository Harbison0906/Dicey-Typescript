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

$('#sum').click(function () {
  let sum = 0; 
  let dieVal = randomVal;
  for (let i = 0; i < diceArray.length; i++) {
    sum += diceArray[i];
  }
  // alert(`Total sum of the die is: ${sum}`);
  console.log(sum);
})