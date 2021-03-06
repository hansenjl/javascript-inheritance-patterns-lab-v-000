function Point(x,y){
  this.x = x
  this.y = y
}

Point.prototype.toString = function(){
  return `(${this.x}, ${this.y})`
}

function Shape(){}

Shape.prototype.addToPlane = function(x,y){
  this.position = new Point(x,y)
}

Shape.prototype.move = function(x,y){
  this.position = new Point(x,y)
}

function Circle(r){
  Shape.call(this)
  this.radius = r
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function(){
  return this.radius * this.radius * Math.PI
}

Circle.prototype.circumference = function(){
  return this.radius * 2 * Math.PI
}

Circle.prototype.diameter = function(){
  return this.radius * 2
}

function Side(length) {
  this.length = length
}

function Polygon(sides) {
  Shape.call(this)
  this.sides = sides
}

Polygon.prototype = Object.create(Shape.prototype);
Polygon.prototype.constructor = Polygon;

Polygon.prototype.numberOfSides = function(){
  return this.sides.length
}

Polygon.prototype.perimeter = function(){
  let perimeter = 0
  for (var i = 0; i < this.sides.length; i++) {
    perimeter += this.sides[i].length
  }
  return  perimeter
}

function Quadrilateral(a,b,c,d){
  Polygon.call(this, [new Side(a),new Side(b),new Side(c),new Side(d) ])
}
Quadrilateral.prototype = Object.create(Polygon.prototype)
Quadrilateral.prototype.constructor = Quadrilateral

function Rectangle(width, height){
  Quadrilateral.call(this,width,width,height,height)
  this.width = width
  this.height = height
}

Rectangle.prototype = Object.create(Quadrilateral.prototype)
Rectangle.prototype.constructor = Rectangle

Rectangle.prototype.area = function(){
  return (this.width * this.height)
}


function Square(length){
  Rectangle.call(this,length,length)
}

Square.prototype = Object.create(Rectangle.prototype)
Square.prototype.constructor = Square

function Triangle(x,y,z){
  Polygon.call(this, [new Side(x),new Side(y), new Side(z)])
}

Triangle.prototype = Object.create(Polygon.prototype)
Triangle.prototype.constructor = Triangle

Square.prototype.listProperties = function(){
  for (var prop in this){
    if(this.hasOwnProperty(prop)){
      console.log(`square.${prop} = ${this[prop]}`)
    }
  }
}