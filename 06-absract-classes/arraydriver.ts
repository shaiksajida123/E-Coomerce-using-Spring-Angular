import { shape } from './shape';
import { circle } from './circle';
import { rectangle } from './rectangle';

let myCircle = new circle(5, 10, 20);
let myRectangle = new rectangle(0, 0, 3, 7);

// declare an array of shapes ... initially empty
let theShapes: shape[] = [];

// add the shapes to the array
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let tempShape of theShapes) {
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}