
// Задача 21 . Найти максимальный элемент массива 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let checkValNumberOfArray = (el) => {
    let count = 0;
    for (let i of el) {
        (!isNaN(i)) ? true: ++count;
    }
    return (count > 0) ? false : true
} 
let findMaxValueOfArray = (el) => {
    if (checkValNumberOfArray(el) === true) {
        let max = el[0]
        for (let i of el) {
            (max > i) ? true: max = i;
        } 
        return max
    } else return `Error`
}
console.log(findMaxValueOfArray(arr));