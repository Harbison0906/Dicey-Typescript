
class Die {
  constructor(value) {
    this.div = $('<div></div>');
    this.div.attr('id', 'die');
    this.roll();
  }
  roll() {
    let randomVal = Math.floor((Math.random() * 6) + 1);
    $(this.div).append(randomVal);
    $('#diceBoard').append(this.div);
  }
}
let diceBoard = $('#diceBoard')
$('body').append(diceBoard);
$('#gen').click(function () {
  new Die();
})