//1. Реализуйте функцию, которая принимает параметром подсторку, число повторов и разделитель, а возвращает сторку, состоящую из указанного количества повторов подстроки с использованием разделителя.
// repeatString("yo", 3, " ") => "yo yo yo"
// repeatString("yo", 3, ",") => "yo,yo,yo"
const repeatString = (str, rep, separator) => {

}



//2. Реализуйте функцию, которая принимает параметром сторку и подстроку, а возвращает true, если строка начинается с указанной подстроки, в противном случае - false. Регистр не учитывается.
// checkStart("Incubator", "inc") => true
// checkStart("Incubator", "yo") => false


//3. Реализуйте функцию, которая принимает параметром строку и число (количество символов), а возвращает строку из параметров, обрезанную до указанного количества символов и завершает её многоточием.
//truncateString("Всем студентам желаю удачи!", 10) => "Всем студе..."


//4. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает самое короткое слово в предложении, если в параметрах пустая строка, то возвращает null.
// getMinLengthWord("Всем студентам желаю удачи!") => "Всем"
// getMinLengthWord("") => null


/*  FINALIZE  */
function getMinLengthWord(str){
    let words = str.split(' ')
    let shortest = words.reduce((shortWord, currentWord) => {
        return currentWord.length < shortWord.length ? currentWord : shortWord
    }, words[0])
    return shortest
}

console.log(getMinLengthWord("Всем студентам желаю удачи!"));




//5. Реализуйте функцию, которая принимает параметром сторку (предложение) и возвращает то же предложение, где все слова написаны строчными, но начинаются с заглавных букв.
// setUpperCase("всем стУдентам Желаю удачИ!") => "Всем Студентам Желаю Удачи!"

const setUpperCase = (str) => {
    const res = str.toLowerCase().split(' ')
    for(let i = 0; i < res.length; i++){
        res[i] = res[i][0].toUpperCase() + res[i].substr(1)
    }

   return res.join(" ")
}

console.log(setUpperCase('she fgds sdf'));




// tasks by numbers


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.
const getTriangleType = (a, b, c) => {
    if(a == b == c) return 10
}

console.log(getTriangleType(10, 20, 30));


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

/* 120 => 3 */
/* 353 => 11 */

function getSum(num){
    let numIsStr = "" + num;
    let sum = 0
    for(let i = 0; i < numIsStr.length; i++)
        sum += +numIsStr[i]
    return sum
}

console.log(getSum(350));


// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.

// [1, -2, 3, 4.1, 5] => [1,9,25]

function getSquarePositiveIntegers(arr) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (Number.isInteger(arr[i]) && arr[i] > 0) {
        result.push(arr[i] * arr[i]);
      }
    }
  
    return result;
  }

  console.log(getSquarePositiveIntegers([1, -2, 3, 4.1, 5]));