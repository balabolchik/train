let Car = function (x,y,z) {
  this.x = x;
  this.y = y;
  this.speed = z;
};

Car.prototype.draw = function () {
  let carHtml = `<img src="../img/car.png">`
  this.carElement = $(carHtml);
  
  this.carElement.css({
    position: "absolute",
    left: this.x,
    top: this.y
  });
  $("body").append(this.carElement);
};

Car.prototype.moveRight = function () {
  this.x += this.speed;
  this.carElement.css({
    left: this.x,
    top: this.y
  });
};

Car.prototype.moveLeft = function () {
  this.x -= this.speed;
  this.carElement.css({
    left: this.x,
    top: this.y
  });
};

Car.prototype.moveUp = function () {
  this.y -= this.speed;
  this.carElement.css({
    left: this.x,
    top: this.y
  });
};

Car.prototype.moveDown = function () {
  this.y += this.speed;
  this.carElement.css({
    left: this.x,
    top: this.y
  });
};


let tesla = new Car(20,20,5);
tesla.draw();

let nissan = new Car(20,90,20);
nissan.draw();

let reno = new Car(20, 160, 15);
reno.draw();
