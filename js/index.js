// let dog = {
//   name: "Chappie",
//   legs: 4,
//   isAwesome: true,
//   sound: "Гав-Гав",
//   speak: speaking
// };

// dog.speak();

// function speaking () {
//   console.log(`${this.sound}! Меня зовут ${this.name}!`);
// };

// let pig = {
//   sound: "Хрю",
//   name: "Чарли",
//   speak: speaking
// };

// let horse = {
//   sound: "И-го-го",
//   name: "Мэри",
//   speak: speaking
// };

// pig.speak();
// horse.speak();
let Car = function (x,y) {
  this.x = x;
  this.y = y;
};

Car.prototype.draw = function () {
  let carHtml = '<img src="../img/car.png">';
  this.carElement = $(carHtml);
  
  this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y
  });
  $("body").append(this.carElement);
};


let tesla = new Car(20,20);
tesla.draw();

let nissan = new Car(100,200);
nissan.draw();