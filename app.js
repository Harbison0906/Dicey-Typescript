let dieVal = [1, 2, 3, 4, 5, 6];

class Die {
  constructor(value) {
   this.div = $('<div></div>');
   this.div.attr('id', 'die');
   this.div.roll();
   $(this.div).append(randomVal);
   $('#diceBoard').append(this.div);
   console.log(this.div);
  }
  roll() {
    let randomVal = Math.floor(Math.random() * this.dieVal) + 1;
    console.log(randomVal);
  }
}
let diceBoard = $('#diceBoard')
$('body').append(diceBoard);
$('#gen').click(function() {
  new Die();
})