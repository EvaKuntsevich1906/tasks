//На входе 5 значений.
//  Из данных элементов составить массив. 
//  Далее необходимо пройтись по каждому
//  из элементов массива и если это число,
//  то создать занести его в новый массив. 
//  Если длина массива равна 0, то вывести 
//  ‘Массив пуст’. Использовать map

//  const arr = [1,3,3,4,5, `Hanna`, `Eva`];

//   let newArr
//       if (arr.length === 0) {
//           console.log(`Mассив пуст`);
//       } else {
//        let newArr = arr.filter((el) => !isNaN);
//        console.log(newArr);
//       }
//     }


const arr = [1,3,3,4,5, `Hanna`, `Eva`];
let newArr = [];
if (!isNan(arr[i])) {
    newArr.push(arr[i])
    if (newArr.length === 0) {
        console.log(`Массив пуст`);
    }
} else {
    console.log(`В массиве нет чисел`);
}