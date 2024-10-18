class Shape{
    _name
    _sides
    _sideLength
    constructor (name , sides =[] , sideLength){
    this._name = name
    this._sides = sides
    this._sideLength = sideLength
    if (this._sideLength !== 4 && this._sides.length !== this._sideLength) {
        throw new Error("The number of sides doesn't match the provided side length.");
    }
    }
    
    get sides (){
        return this._sides
    }
    set sides (array){
        if(Array.isArray(array)){
            this._sides = array
        } else {
            throw new Error ("Sides must be an array")
        }
    }

    get sideLength(){
        return this._sideLength
    }

    set sideLength(num){
        this._sideLength = num
    }
}


Shape.prototype.calcPerimeter= function () {
    if (this._sides.length === 1) {
        throw new Error(`The ${this._name} must have at least two sides to calculate the perimeter.`);
    }
    if(this._sideLength === 4){
        const selectedSides = this._sides.slice(0, 2)
        const sum = selectedSides.reduce((acc ,item) =>  acc+ item)
        return `The perimeter of the ${this._name} is ${sum * 2}`    
    }   else {
    const perimeter = this._sides.reduce((total , side) => side + total ,0)
    return `The perimeter of the ${this._name} is ${perimeter}`
    }
    }

   
class Square extends Shape{
    #sideLength
    constructor(sideLength){
        super("Square" , 4)
        this.#sideLength = sideLength
    }
    calcArea() {
        const res = this.#sideLength * this.#sideLength
        return `The area of the square is ${res}`
    }
    calcPerimeter(){
        const result = this.#sideLength * 4
        return `The perimeter of the square is ${result}`
    }
    get sideLength(){
        return this.#sideLength
    }
}


const triangle = new Shape("Triangle" , [2,  4 , 1] , 3)
const square = new Square([2])
const rectangle = new Shape("Rectangle" , [2 , 3] ,4)
console.log(rectangle.calcPerimeter())
console.log(square.calcArea())
console.log(square.calcPerimeter())
console.log(triangle.calcPerimeter())