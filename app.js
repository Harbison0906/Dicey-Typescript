var diceArray = [];
var Die = /** @class */ (function () {
    function Die() {
        var _this = this;
        this.div = $('<div class="die"></div>');
        this.roll();
        $('#diceBoard').append(this.div);
        this.div.click(function () { return _this.roll(); });
        this.div.dblclick(function () { return _this.destroy(); });
    }
    Die.prototype.destroy = function () {
        this.div.remove();
        var index = diceArray.indexOf(this);
        diceArray.splice(index, 1);
    };
    Die.prototype.roll = function () {
        this.randomVal = Math.floor((Math.random() * 6) + 1);
        $(this.div).text(this.randomVal);
    };
    return Die;
}());
$('#gen').click(function () { return diceArray.push(new Die()); });
$('#roll').click(function () { return diceArray.forEach(function (die) { return die.roll(); }); });
$('#sum').click(function () {
    var sum = 0;
    diceArray.forEach(function (die) { return (sum += die.randomVal); });
    alert("Total sum of the die is: " + sum);
});
