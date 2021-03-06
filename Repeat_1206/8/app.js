
//Задача 8.На входе есть пароль, который 
// пользователь вводит с клавиатуры.
// Требования:
// 1. Пароль должен содержать не менее 8 символов
// блоке try/catch при обработке пароля необходимо
// бросить исключение, если в пароле меньше 8 символов. 
// Если пароль корректный, то вывести *, где одна *- один
//  символ. Пример: 12345678 -> *******. Pass -> исключение

const password = `26пж::№:*?68726444таыиаыиаыать`;
const checkPassword = (str) => {
    try {
        if (str.length >= 8) return `*`.repeat(str.length)
        else throw new Error(`Вы ввели пароль меньше 8 символов`)
    } catch (err) {
        return err;
    }
}
console.log(checkPassword(password));