//  Задача 3.Есть массив. Необходимо проверить массив. В массиве должны быть только числа. 
// Если же там есть хотя бы 1 строка, то бросить исключение и обработать его. 
// Если там только строки, то удвоить каждое

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let checkArrayOfNum = (arrayNum) => {
    let countOfString = 0;
    for (let item of arrayNum) {
        (!isNaN(item)) ? true: ++countOfString;
    }
    if (countOfString > 0) throw new Error(`Имеются стрококвые значения`);
    else return true
}
let doubleOfEachElements = (arrayOfNumbers) => {
    try {
        let boolCheckArrayOfNum = checkArrayOfNum(arrayOfNumbers)
        if (boolCheckArrayOfNum === true) {
            let doubleArray = []
            for (let item of arrayOfNumbers) {
                doubleArray.push(item * 2)
            }
            return doubleArray;
        } 
    } catch (e) {
        return  e
    }
}
console.log(doubleOfEachElements(array));