let sides = 6

class Die {
  constructor(value) {
   this.val = roll();
  }
  roll() {
    let randomVal = Math.floor(Math.random() * this.sides) + 1;
    console.log(randomVal);
  }
}

roll();
