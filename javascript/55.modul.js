export const PI = 3.14;

export function getCircumfernce(radius){
    return 2 * PI * radius;
}

export function getArea(radius){
    return PI * radius * radius;
}

export function getVolume(radius){
    return (4/3) * PI * radius ** 3;
}