dieValues = [1, 2, 3, 4, 5, 6];

class Die {
  constructor(value) {
    this.value = value;
  }
  roll() {
    let randomVal = dieValues[Math.floor(Math.random() * dieValues.length)];
      console.log(randomVal);
  }
}

$('#gen').click(roll());