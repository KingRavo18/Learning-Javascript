// .reduce() = reduce the elements of an array
//             to a single value

const prices = [23, 24, 4, 34, 634, 3];

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`);

/*
function sum(0, 23){
    return 0 + 23;
}
*/

function sum(previous, next){
    return previous + next;
}

const grades = [75, 50, 34, 24, 54, 92];

const maxGrade = grades.reduce(getMax);

function getMax(accumulator, element){
    return Math.max(accumulator, element);
}

console.log(maxGrade);

const minGrade = grades.reduce(getMin);

function getMin(accumulator, element){
    return Math.min(accumulator, element);
}

console.log(minGrade);