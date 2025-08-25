// ES6 Module = An external file that contains reusable code
//              that can be imported into other JavaScript files.
//              Write reusale code for many different apps.
//              Can contain variables, classes, functions ... and more
//              Introduced as part of ECMAScrip 2015 update

import {PI, getCircumfernce, getArea, getVolume} from './55.modul.js';

console.log(PI);
const circumference = getCircumfernce(4);
const area = getArea(4);
const volume = getVolume(4);
console.log(circumference);
console.log(area);
console.log(volume);