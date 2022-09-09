// console.log(Math.floor(Math.random() * 10) + 21)


// Լրացուցիչ խնդիր: Ցանկացած թիվ գրելու դեպքում առանձին տպել console-ում

// Տարբերակ 1
// function numbers(val) {
//    let digits = val.toString().split("");
//    console.log(digits);
// }
// numbers(888888888888888)


// Տարբերակ 2
// function digits(val) {
//    let output;
//    while(val) {
//       output = (val % 10);
//       val = Math.floor(val / 10);
//    }
//    console.log(output.reverse().join(','));
// }

// digits(123456789)







// let text = "Test!WeLearn!lasdo!test";
// let resultText = "";
// let nextPosition = 0;
// let position = text.indexOf("!");

// while(position !== -1) {
//    resultText += text.slice(nextPosition, position) + " ";
//    nextPosition = position + 1;
//    position = text.indexOf("!", nextPosition);
// }

// let lastWord = text.slice(nextPosition);
// resultText += lastWord;
// console.log(resultText);

// Lesson 1 ==========================================================================================

/* let number = 999;
let first = Math.floor(number / 100);
let second = Math.floor(number / 10) % 10;
let last = number % 10;
console.log(first, second,last ); */


// Lesson 2 ===========================================================================================

// const mainStr = "We learn JavaScript then learn React and continue learning."

// Test 1

// let replace2ndLearn = mainStr.replace("then learn", "then should learn"); // We learn JavaScript then should learn React and continue learning
// let includesText = mainStr.slice(0, 37) + "or Angular or Vue" + mainStr.slice(36); // We learn JavaScript then learn React or Angular or Vue and continue learning.
// let getTextOne = mainStr.slice(0, 37); // We learn JavaScript then learn React
// let getTextTwo = mainStr.slice(0, 9) + mainStr.slice(31) // We learn React and continue learning
// let remove2ndLearn = mainStr.slice(0, 24) + mainStr.slice(30) // We learn JavaScript then React and continue learning

// console.log(replace2ndLearn);
// console.log(includesText);
// console.log(getTextOne);
// console.log(getTextTwo);
// console.log(remove2ndLearn);

// Test 2

// console.log(mainStr.length); // 59
// console.log(mainStr.indexOf("React")); // 31

// let replaceLearn = mainStr.slice(25).replace("learn", "LEARN");
// let concatText = (mainStr.slice(0, 25) + replaceLearn);
// console.log(concatText.indexOf("LEARN")); // 25 

// Lesson 4 Object Array ===========================================================================================

// Յուրաքանչյուր ուսանող նկարագրում է որևէ օբյեկտ նրան տալով հատկություններ։Այնուհետև ավելացնում, ապա նաև հեռացնում էօբյեկտի հատկություններ։

// const student = {
//    name: "Արամ",
//    surName: "Խաչիկյան",
//    patronymic: "Աշոտի",
//    age: 20,
//    phone: "094949494",
//    addres: {
//       city: "Վանաձոր",
//       street: "Տիգրան Մեծ 38",
//       aprtNum: 28,
//    },
//    studies: {
//       university: "Վալերի Բրյուսովի անվան համալսարան",
//       proggres: "Լավ",
//       enterTheUniversity: "2021-09-01",
//       universityGraduation: "2025-06-...",
//    },
//    friends: [
//       {
//          name: "Միքայել",
//          surName: "Սարոյան",
//          patronymic: "Գառնիկի",
//          age: 22,
//          phone: "098789654"
//       },
//       {
//          name: "Նարեկ",
//          surName: "Հակոբյան",
//          patronymic: "Անդրեյի",
//          age: 19,
//          phone: "094778899"
//       }
//    ]
// }


// // Ստանալ բոլոր բանալիները
// console.log(Object.keys(student));
// // Ստանալ բոլոր արժեքները
// console.log(Object.values(student));

// // Փոխարինում
// student.phone = "094556677";
// console.log(student.phone);

// student.friends[0].name = "Արսեն";
// console.log(student.friends[0].name);

// // Ավելացում
// student.eyeColor = "Blue";
// console.log(student.eyeColor);

// student.studies.faculty = "Կրթության և մասնագիտական մանկավարժության"
// console.log(student.studies.faculty);

// // Ջնջել (delete)
// delete student.addres.aprtNum
// console.log(student.addres.aprtNum); // undefined

// console.log(student);



// Վարժություն 1

// a) ստանալ նոր զանգված որտեղ կունենանք nums զանգվածի առաջին և վերջին թվերը
// const nums = [8, 25, 14, 30, 55, 47];
// const firstNum = nums[0];
// const lastNum = nums[nums.length -1];
// const resultNums = [firstNum, lastNum]
// console.log(resultNums); // 8, 47


// b) nums զանգվածի թվերը բացառությամբ առաջի և վերջին թվերի
// const nums = [8, 25, 14, 30, 55, 47];
// nums.shift();
// nums.pop();
// console.log(nums);



// c) nums զանգվածը հակառակ դասավորությամբ
// const nums = [8, 25, 14, 30, 55, 47];
// console.log(nums.reverse());



// d) nums զանգվածը աճման կարգով
// const nums = [8, 25, 14, 30, 55, 47];
// nums.sort(function(a, b) {
//    return a - b
// })
// console.log(nums);


// e) նույն nums զանգվածը, սակայն առանց referenc-ի եթե նոր զանգվածի որևէ էլեմենտ փոխենք, nums ում չի փոխվի
// const nums = [8, 25, 14, 30, 55, 47];
// const newArr = nums.slice();
// newArr[0] = 12;
// console.log(nums); // [8, 25, 14, 30, 55, 47];
// console.log(newArr); // [12, 25, 14, 30, 55, 47];



// Վարժություն 2 ================================================================

// a) օբյեկտին ավելացնել նոր հատկություններ (min 3 հատ)
// const hotel = {
//    rooms: 50,
//    stars: 4,
// };

// hotel.phone = "+37494886655";
// hotel.stars = 5;

// for(let key in hotel) {
//    console.log(key);
// }

// for(let value in hotel) {
//    console.log(hotel[value]);
// }

// let objKeys = Object.keys(hotel);
// console.log(objKeys);

// let objValues = Object.values(hotel);
// console.log(objValues);

// let objString = JSON.stringify(hotel)
// console.log(objString);


// b) հեռացնել 2 հատկություն 2 տարբեր եղանակով
// const hotel = {
//    rooms: 50,
//    stars: 4,
// };

// delete hotel.rooms
// console.log(hotel);

// delete hotel["stars"]
// console.log(hotel);


// c) ստանալ hotel օբյեկտի պատճեն (առանց reference)
// const hotel = {
//    rooms: 50,
//    stars: 4,
// };

// const clone = {};
// for(let key in hotel) {
//    clone[key] = hotel[key];
// }
// clone.stars = 2;
// console.log(clone); // 2, 4



// d) թույլ չտալ օբյեկտին նոր key-եր ավելացնելը
// const hotel = {
//    rooms: 50,
//    stars: 4,
// };
// Object.preventExtensions(hotel);
// hotel.name = "MarlEyro";
// console.log(hotel); //  rooms: 50, stars: 4,


// e) ստանալ օբյեկտի key-երը և value-ները
// const hotel = {
//    rooms: 50,
//    stars: 4,
// };
// console.log(Object.keys(hotel));
// console.log(Object.values(hotel));

// for (let key in hotel) {
//    console.log(key);
// }
// for (let value in hotel) {
//    console.log(hotel[value]);
// }



// const person = {
//    firstName: "John",
//    lastName : "Doe",
//    language : "EN"
//  };


//  console.log(Object.defineProperty(person, "language", {enumerable:false}));
//  console.log(Object.getOwnPropertyNames(person));



// Lesson 5 if else switch ===========================================================================================

/* Առաջադրանք։ Տրվ․ են a և b փոփոխականները, որոնք ամբողջ թվեր են և sign տեքստային փոփոխականը, որը կարող է լինել հետևյալ նշաններից որևէ մեկը․ "+", "-", "*", "/", "%", "**"։ Կազմել ծրագիր, որն օգտագործելով switch-ը, կախված sign֊ ի արժեքից, կհաշվի a և b թվերի համապատասխան գործողությունը կտպի։ */

// let a = 2;
// let b = 3;
// let sign = "-";
// let d = eval(a + sign + b)
// switch (d) {
//    case 6:
//       console.log("case 6");
//       break;
//    case 8:
//       console.log("case 8");
//       break;
//    case 11:
//       console.log("case 11");
//       break;

//    default:
//       console.log("default:", d)
// }


// 1․ տրվ․ են a = 12, b = 15, c = 20 թվերը։

// a)նշվածից գտնել այն թվերի գումարը, որոնք առանց մնացորդ բաժանվում են 4֊ի:

// let a = 12;
// let b = 15;
// let c = 20;
// let result = 0;

// if(a % 4 === 0) {
//   result += a;
// }
// if(b % 4 === 0) {
//   result += b;
// }
// if(c % 4 === 0) {
//   result += c;
// }

// console.log(result);


// b) նշվածից գտնել այն թվերի արտադրյալը, որոնք առանց մնացորդ բաժանվում են կամ 3֊ի, կամ՝ 4֊ի:

// let a = 19;
// let b = 3;
// let c = 21;

// if (a % 3 === 0 || a % 4 === 0 &&
//     b % 3 === 0 || b % 4 === 0 &&
//     c % 3 === 0 || c % 4 === 0) {
//    console.log(a * b * c);
// } else if(a % 3 === 0 || a % 4 === 0 && b % 3 === 0 || b % 4 === 0) {
//    console.log(a * b);
// } else if(a % 3 === 0 || a % 4 === 0 && c % 3 === 0 || c % 4 === 0) {
//    console.log(a * c);
// }else if(b % 3 === 0 || b % 4 === 0 && c % 3 === 0 || c % 4 === 0) {
//    console.log(b * c);
// }


// c)Գտնել նշված թվերից մեծագույնը։

// let a = 22;
// let b = 35;
// let c = 23;

// if(a >= b && a >= c) {
//    console.log("Մեծ թիվը a-ն է", a);
// } else if (b >= c) {
//    console.log("Մեծ թիվը b-ն է", b);
// } else {
//    console.log("Մեծ թիվը c-ն է", c);
// }



/* 2.տրվ․ են a = 5, b = 3, operation = "addition" և result փոփոխականը: switch-ի օգնությամբ նկարագրել՝ "addition", "difference", "multiply", "division",
"modulus", "exponentiation" case-երը։switch-ին փոխանցել operation֊ը և switch-ի ամեն case-ի դեպքում result-ին վերագրել a և b֊ի հետ 
կատարվող գործողության արդյունքը։ Վերջում տպել result-ի արժեքը։ operation-ի արժեքը փոխել(օր․ "modulus") և տեստավորել։ */

// let a = 5;
// let b = 3;
// let operation = "modulus"
// let result = 0;

// switch (operation) {
//    case "addition":
//       result += a + b
//       break;
//    case "difference":
//       result += a + b
//       break;
//    case "multiply":
//       result += a + b
//       break;
//    case "division":
//       result += a + b
//       break;
//    case "modulus":
//       result += a + b
//       break;
//    case "exponentiation":
//       result += a + b
//       break;

//    default:
//       console.log("None of the answers match");
// }

// console.log(result);


// Lesson 6  for loop while loop Array  ===========================================================================================

// 1. տրվ․ է հետևյալ զանգվածը [10, 25, 18, 50, 30, 42, 11]
// a) հաշվել զանգվածի էլեմենտների գումարը

// for loop

// const values = [10, 25, 18, 50, 30, 42, 11];
// let result = 0;
// for(let i = 0; i < values.length; i++) {
//    result += values[i];
// }
// console.log(result);


// while loop

// const values = [10, 25, 18, 50, 30, 42, 11];
// let i = 0
// let result = 0;
// while(i < values.length) {
//    result += values[i]
//    i++
// }
// console.log(result);


// b) ստանալ նոր զանգված որտեղ կլինեն values զանգվածի կենտ թվերը

// for loop

// const values = [10, 25, 18, 50, 30, 42, 11];
// const arr = [];
// let i2 = 0;

// for (let i = 0; i < values.length; i++) {
//    if (values[i] % 2 !== 0) {
//       arr[i2] = values[i]
//       i2++
//    }
// }
// console.log(arr);


// while loop

// const values = [10, 25, 18, 50, 30, 42, 11];
// const arr = [];
// let i = 0;
// let i2 = 0;

// while(i < values.length) {
//    if(values[i] % 2 !== 0) {
//       arr[i2] = values[i];
//       i2++
//    }
//    i++
// }
// console.log(arr);



// c) հաշվել զանգվածի այն զույգ էլեմենտների գումարը, որոնք բաժանվում են նաև 10֊ի(առանց մնացորդ)

// for loop

// const values = [10, 25, 18, 50, 30, 42, 11];
// let result = 0;

// for(let i = 0; i < values.length; i++) {
//    if(values[i] % 2 === 0 && values[i] % 10 === 0) {
//       result += values[i];
//    }
// }
// console.log(result);



// while loop

// const values = [10, 25, 18, 50, 30, 42, 11];
// let result = 0;
// let i = 0;

// while(i < values.length) {
//    if(values[i] % 2 === 0 && values[i] % 10 === 0) {
//       result += values[i];
//    }
//    i++
// }
// console.log(result);



// d) տպել զանգվածի այն թվերը, որոնք բաժանվում են կամ 5֊ի, կամ՝ 3֊ի։

// for loop

// const values = [10, 25, 18, 50, 30, 42, 11];

// for(let i = 0; i < values.length; i++) {
//    if (values[i] % 5 === 0 || values[i] % 3 === 0) {
//       console.log(values[i]);
//    }
// }


// while loop
// const values = [10, 25, 18, 50, 30, 42, 11];
// let i = 0;
// while(i < values.length) {
//    if (values[i] % 5 === 0 || values[i] % 3 === 0) {
//       console.log(values[i]);
//    }
//    i++
// }


// e) values զանգվածից հեռացնել կենտ թվերը
// for loop

// const values = [10, 25, 18, 50, 30, 42, 11];

// for (let i = 0; i < values.length; i++) {
//    if (values[i] % 2 !== 0) {
//       values.splice(i, 1)
//    }
// }
// console.log(values);


// while loop
// const values = [10, 25, 18, 50, 30, 42, 11];
// let i = 0;
// while (i < values.length) {
//    if (values[i] % 2 !== 0) {
//       values.splice(i, 1)
//    }
//    i++
// }
// console.log(values);



// 2.տրվ․ է հետևյալ տեքստը։
// a)"!" նշված սիմվոլը փոխարինել "տարածության"(пробел) սիմվոլով։

// let text = "Test!your!knowledge!and!solve!tasks.";
// let newText = text.replace(/!/g, " ");
// text = newText;
// console.log(text);



// b) գտնել "s" սիմվոլների քանակը

// let text = "Test!your!knowledge!and!solve!tasks.";
// let getS = 0;
// for(let i = 0; i < text.length; i++) {
//    if (text[i] === "s") {
//       getS++;
//    }
// }
// console.log(getS);


// c) տպել տեքստի բառերը(Test, your, ...)

// let text = "Test!your!knowledge!and!solve!tasks.";
// let newText = text.replace(/!/g, " ").split(" ");
// text = newText;
// for(let i = 0; i < text.length; i++) {
//    console.log(text[i]);
// }


// let arr = [10, 15, 10, 20, 35, 15];
// let newArr = arr.filter(function(item, index) {
//    return arr.indexOf(item) !== index;
// })
// console.log(newArr);

// let div = document.querySelectorAll("div");
// let btn = document.querySelector("button");
// let arrNames = ["Aram", "Ashot", "Anna", "Erik", "Ruzan"];
// btn.addEventListener("click", function () {
//    for(let i = 0; i < div.length; i++) {
//       div[i].innerHTML = arrNames[Math.floor(Math.random() * arrNames.length)]
//    }
// })


// Lesson 7 function =======================================================================================



// 1. Տրվ․ է հետևյալ զանգվածը: Կազմել ֆունկցիա, որը որպես արգումենտ կընդունի տրվ․ զանգվածը և

// a) կգտնի տրված զանգվածի մեծագույն էլեմենտը և կվերադարձնի այն։

// const numsArr = [2, -7, 5, -10, 25, -14, 17, -8];

// function getMaxNumOfArr(arr) {
//    let max = arr[0];
//    for (let i = 1; i < arr.length; i++) {
//       if (max < arr[i]) {
//          max = arr[i];
//       }
//    }
//    return max
// }

// console.log(getMaxNumOfArr(numsArr));



// b) կվերադարձնի նշված զանգվածի պատճեն (առանց reference֊ի)։

// const numsArr = [2, -7, 5, -10, 25, -14, 17, -8];
// let newArr = [];
// function copyArr(arr) {
//    for(let i = 0; i < arr.length; i++) {
//       newArr.push(arr[i])
//    }
//    return newArr
// }
// console.log(copyArr(numsArr));


// c) կհաշվի և կվերադարձնի զանգվածի բացասական էլեմենտների քանակը։

// const numsArr = [2, -7, 5, -10, 25, -14, 17, -8];
// let result = 0;

// function negativeNums(arr) {
//    for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < 0) {
//          result++
//       }
//    }
//    return result;
// }

// console.log(negativeNums(numsArr));



// 2. Տրվ․ է հետևյալ տեքստը: Կազմել ֆունկցիա, որը կընդունի տրված տեքստը և կվերադարձնի նոր տեքստ, որում

// a) բոլոր սիմվոլները կլինեն մեծատառ

// const text = "wE leArN PrograMMing eSPecialLy jS";
// let newUpperText;

// function upperText(txt) {
//    newUpperText = txt.toUpperCase();  // b) txt.toLowerCase();
// }
// upperText(text);
// console.log(newUpperText);



// c) մեծատառերը դարձված կլինեն փոքրատառ, իսկ փոքրատառերը մեծատառ։

// const text = "wE leArN PrograMMing eSPecialLy jS";

// function reverseLetterCase(txt) {
//    let newtext = "";
//    for (let i = 0; i < txt.length; i++) {
//       if (txt[i] === txt[i].toUpperCase()) {
//          newtext += txt[i].toLowerCase();
//       } else {
//          newtext += txt[i].toUpperCase();
//       }
//    }
//    return newtext
// }

// console.log(reverseLetterCase(text));


// Տարբերակ 2

// const text = "wE leArN PrograMMing eSPecialLy jS";

// function reverseLetterCase(txt) {
//   let newtext = txt.toUpperCase().split("");
//   for (let i = 0; i < txt.length; i++) {

//     if (newtext[i] === txt[i]) {
//       newtext[i] = txt[i].toLowerCase();
//     }
//   }
//   return newtext.join("")
// }

// console.log(reverseLetterCase(text));


// let user = {
//    name: "John",
//    age: 20
// };
// let person = Object.assign({}, user);;
// console.log(person);





// Lesson 8 =======================================================================


// 1 Տրված է զանգված, որի էլէմենտները թվեր են։ Կազմել ֆունկցիա որը կընդունի թվային զանգված և կվերադարձնի զանգվածի փոքրագույն էլեմենտը։

// const arr = [10, 150, 35, 2, 48, 6];

// function getMinValue(inputArr) {
//    let min = inputArr[0];
//    for (let i = 1; i < inputArr.length; i++) {

//       if (min > inputArr[i]) {
//          min = inputArr[i];
//       }
//    }
//    return min;
// }

// console.log(getMinValue(arr));




/* 2.Կազմել ֆունկցիա, որը կընդունի 2-ական համակարգի թիվ և կվերադարձնի տրված թվի 10֊ական համակարգի համարժեքը։
2֊ական համակարգի թիվը բաղկացած է միայն 1֊երից և 0֊ներից։
2-ական համակարգի թիվը լինելու է տեքստային մեծություն */

// function binaryToDecimal(textNum) {
//    return textNum.split("")
//       .reverse()
//       .reduce(function (aggr, val, i) {
//          if (val === "1") {
//             return aggr + Math.pow(2, i);
//          } else {
//             return aggr;
//          }
//       }, 0)
// }

// console.log(binaryToDecimal("1010"));




/* 3.     Տրված է զանգված, որի էլեմենտները տեքստային մեծություններ են։
Կազմել ֆունկցիա, որը կընդունի տրված տեքստային էլեմենտներից բաղկացած զանգվածը և կվերադարձնի նոր զանգված որտեղ կլինեն այն էլեմենտները որոնք սկսվում են մեծատառով։ч */

// const textArr = ["html", "Css", "bootstrap", "JavaScript", "React", "world", "Hello"];

// function returnUpperCase(arr) {
//    let resultArr = [];
//    let i2 = 0;
//    for (let i = 0; i < arr.length; i++) {
//       if (arr[i][0] === arr[i][0].toUpperCase()) {
//          resultArr[i2] = arr[i];
//          i2++;
//       }
//    }
//    return resultArr;
// }

// console.log(returnUpperCase(textArr));




// 4. Տրված է 10-ական համակարգի թիվ։ Կազմել ֆունկցիա որը կընդունի 10-ական համակարգի թիվ և կվերադարձնի համարժեք 2-ականը

// function decimalToBinary(number) {
//    let binary = (number % 2).toString();
//    while(number > 1) {
//       number = parseInt(number / 2);
//       binary = (number % 2) + binary;
//    }
//    return binary
// }

// console.log(decimalToBinary(10));




// function convertToBinary(num, result = []) {
//    const isNegative = num < 0;
//    if (isNegative) num *= -1;
//    result.unshift(num % 2);
//    num = Math.floor(num / 2);
//    if (num)
//       result = convertToBinary(num, result);
//    else
//       return result.join('');
//    return (isNegative ? '-' : '') + result;
// }

// console.log(convertToBinary("005"));






// const twoSum = (array, goal) => {
//    let indexes = [];
//    for (let i = 0; i < array.length; i++) {
//      for (let j = i + 1; j < array.length; j++) {
//        if (array[i] + array[j] === goal) {
//          indexes.push(i);
//          indexes.push(j);
//        }
//      }
//    }
//    return indexes;
//  };

//  alert(twoSum([10, 12, 13, 14, 15, 16], 29));


// Lesson 9 =======================================================================

/* 1.   Կազմել ֆունկցիա, որը կընդունի տեքստային մեծություն և կվերադարձնի “text is polindrome” եթե տեքստը պոլինդրոմ է(ձախից աջ և աջից ձախ կարդալիս նույն տեքստն է ստացվում), հակառակ դեպքում կվերադարձնի “text is not polindrome” */

// let str = "aacbcaa";

// function isPolindrome(text) {
//   for (let i = 0; i < text.length / 2; i++) {
//     if (text[i] !== text[text.length - 1 - i]) {
//       console.log("Text is not polindrome");
//     }
//   }
//   console.log("Text is polindrome");
// }

// (isPolindrome(str));

// 2. Կազմել ֆունկցիա որը կընդունի զանգված, որի էլէմենտները օբյեկտներ են, և երկրորդ արգումենտ թվային փոփոխական(age)։
/* Ֆունկցիան վերադարձնելու նոր զանգված որտեղ լինելու են այն մարդիկ որոնց տարիքը <= age-ից։ */

// let people = [{
//     firstName: "Aram",
//     lastName: "Sargsyan",
//     age: 25
//   },
//   {
//     firstName: "Armen",
//     lastName: "Gasparyan",
//     age: 30
//   },
// ]


// function smallAge(arr, age) {
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].age <= age) {
//       newArr.push(arr[i].firstName, arr[i].lastName)
//     } 
//   }
//   return newArr
// }
// console.log(smallAge(people, 30))


// function hexadecimalToDecimal(hexVal) {
//   var len = hexVal.length;
//   var base = 1;
//   var dec_val = 0;

//   for (var i = len - 1; i >= 0; i--) {

//     if (hexVal.charAt(i) >= '0' &&
//       hexVal.charAt(i) <= '9') {
//       dec_val += (hexVal.charAt(i).charCodeAt(0) - 48) * base;

//       base = base * 16;
//     }
//     else if (hexVal.charAt(i) >= 'A' &&
//       hexVal.charAt(i) <= 'F') {
//       dec_val += (hexVal.charAt(i).charCodeAt(0) - 55) * base;

//       base = base * 16
//     }
//   }
//   return dec_val;
// }
// console.log(hexadecimalToDecimal("0FE9AB"));




// function decimalToHex(x) {
//   var parsed = parseInt(x, 10);
//   if (isNaN(parsed)) { return 0; }

//   hexstr = ""
//   while(parsed > 0) {
//     var value = parsed % 16
//     hexstr = (
//       value == 10 ? "A" : (
//         value == 11 ? "B" : (
//         value == 12 ? "C" : (
//         value == 13 ? "D" : (
//         value == 14 ? "E" : (
//         value == 15 ? "F": value)))))) + hexstr
//     parsed = parseInt(parsed / 16)
//   }

//   return '0x'+ hexstr;
// }

// console.log(decimalToHex('231'));


// ====================================== Code Signal ============================================

// Year To century

// function solution(year) {
//   let centuryCount = 0;
// while (year > 0){
//   year = year - 100;
//   centuryCount = centuryCount + 1;
// }
// return centuryCount;
// }





// function solution(inputArray) {
//   var arr = inputArray;
//   var x = 0;
//   var y = 0;
//   var p = -Infinity;
//   for (var i = 0; i < arr.length; i++) {
//     x = arr[i];
//     y = arr[i + 1];
//     if (x * y > p) {
//       p = x * y;
//     };
//   };
//   return p;
// };


// solution([3, 6, -2, -5, 7, 3])



// function solution(n) {
//   return 2*n*(n-1) +1;
// }





// function solution(statues) {
//   let statuesNeeded = 0;
//   statues.sort((a, b) => {
//     return a - b;
//   })
//   for (let i = 0; i < statues.length; i++) {

//     if (statues[i + 1] - statues[i] > 1) {
//       statuesNeeded += statues[i + 1] - statues[i] - 1;
//     }
//   }
//   return statuesNeeded;
// }

// console.log(solution([2,3,6,8]));







// function solution(sequence) {
//   var found = 0;
//   for (var i = 0; i < sequence.length; i++) {

//     if (sequence[i] <= sequence[i - 1]) {
//       found++;
//       if (found > 1) return false;

//       if (sequence[i] <= sequence[i - 2] && sequence[i + 1] <= sequence[i - 1]) return false;
//     }

//   }
//   return true;
// }

// console.log(solution([2, 1, 3, 4]));



// ======================================== JS MESCHYAN ==========================================



// let userName = prompt("What is your name?");
// let lastName = prompt("What is your last name?");
// alert("Nice to meet you " + userName + " " + lastName);




// let x = prompt("How are you?");

// if (x === "good") {
//     alert("vay inch lavaa");
// } else if (x === "very good") {
//     alert("ohhhh shat lav e");
// } else {
//     alert("vay vay, vuy vuy");
// }




// Ցիկլ ցիկլի մեջ

// firstFor: for(let num = 0; num < 2; num++) {
// 	for(let size = 0; size < 3; size++) {
// 		console.log(size);
// 		if(size === 2) {
// 			break firstFor
// 		}
// 	}
// }







// Պարզ խաղ
//  let points = 0;

// let russia = prompt("Ответь на вопрос! \n Столица России?");
// if (russia === "Москва") {
//     points = points + 1;
//     alert("Столица России это Москва и вы правильно");
// } else {
//     alert("Столица России это Москва и вы НЕ правильно");
// }

// let armenia = prompt("Ответь на вопрос! \n Столица Армении?");
// if (armenia === "Ереван") {
//     points = points + 1;
//     alert("Столица Армении это Ереван и вы правильно");
// } else {
//     alert("Столица Армении это Ереван и вы НЕ правильно");
// }

// let england = prompt("Ответь на вопрос! \n Столица Англии?");
// if (england === "Лондон") {
//     points = points + 1;
//     alert("Столица Англии это Лондон и вы правильно");
// } else {
//     alert("Столица Англии это Лондон и вы НЕ правильно");
// }

// alert("Вы забирали " + points + " " + "очков");








//  let userName = prompt("Кто там?", '');

// if (userName === 'Админ' || userName === 'админ' || userName === 'Admin' || userName === 'admin') {

//     let pass = prompt('Пароль?', '');

//     if (pass === 'Я главный' || pass === 'я главный') {
//         alert('Здравствуйте!');
//     } else if (pass === '' || pass === null) {
//         alert('Отменено');
//     } else {
//         alert('Неверный пароль');
//     }

// } else if (userName === '' || userName === null) {
//     alert('Отменено');
// } else {
//     alert('Я вас не знаю');
// }






// let x  = ["Poghos", "Petros", "Hamo"];
// let i = 0;

// while (i < x.length) {
//     alert(x[i]);
//     i = i + 1;
// }



// let x = [15, 30, 100, ["W124", "E34", ["AMG", "E500"]],21];
// alert(x[3][2][0]);



/*
  Tic Tac Toe
  ------------------------------------------------------------------------
  A game for two players, X and O, who take turns marking the spaces
  in a 3×3 grid. The player who succeeds in placing three of their marks
  in a horizontal, vertical, or diagonal row is the winner.
*/



// let board = [
//     [ "_", "_", "_" ],
//     [ "_", "_", "_" ],
//     [ "_", "_", "_" ]
//   ];

// let stringifyBoard = function(board) {
// 	return board[0].join("   ") +
//        "\n" +
//        board[1].join("   ") +
//        "\n" +
//        board[2].join("   ");
// };

// let player = "x";


// let didWeWin = function (board, player) {

//     // check rows

//     if (board[0][0] === player && board[0][1] === player && board[0][2] === player ||
//         board[1][0] === player && board[1][1] === player && board[1][2] === player ||
//         board[2][0] === player && board[2][1] === player && board[2][2] === player) {
//         return true;
//     }

//     // check columns

//     if (board[0][0] === player && board[1][0] === player && board[2][0] === player ||
//         board[0][1] === player && board[1][1] === player && board[2][1] === player ||
//         board[0][2] === player && board[1][2] === player && board[2][2] === player) {
//         return true;
//     }

//     // check diagonal
//     if (board[0][0] === player && board[1][1] === player && board[2][2] === player ||
//         board[2][0] === player && board[1][1] === player && board[0][2] === player) {
//         return true;
//     }
//     return false;
// }

// let isFull = function(board) {
//   let i = 0;
//   while(i < board.length) {
//     const row = board[i];

//     let i2 = 0;
//     while(i2 < row.length) {
//       if(row[i2] === "_") {
//          return false;
//       }
//       i2 = i2 + 1;
//     }
//     i = i + 1;
//   }

//   return true;
// };



// while(true) {
//   let boardStr = stringifyBoard(board);

//   let row = +prompt("Dear user, please provider the value for the row \n\n"+boardStr);
//   let column = +prompt("Dear user, please provider the value for the column \n\n"+boardStr);

//   if(board[row][column] !== "_") {
//     alert("Not a legal move, you lose!");
//     break;
//   }

//   board[row][column] = player;


//   const won = didWeWin(board, player);

//   if(won) {
//     alert("Player " + player +" won the game!");
//     break;
//   }

//   if(isFull(board)) {
//     alert("The board is full, nobody won");
//     break;
//   }


//   if(player === "x") {
//     player = "o";
//   } else {
//     player = "x";
//   }
// }



// let a = [24, 22, [7, [84, 99]], [3, 1, 6], [0, 8, [4, 5]]];
//  alert(a[3][1] + a[4][2][1] * a[3][0] + a[2].length); // 18





// let a = ["Poghos", "Petros", "Hamo", "Aramis", "Samson"];
// alert(a);

// let i = 0;
// let i2 = a.length - 1;

// while (i < a.length/2) {
//     let d = a[i];
//     a[i] = a[i2];
//     a[i2] = d;

//     i = i + 1;
//     i2 = i2 - 1;
// }
// alert(a);








// Թվերը բազմապատկում ենք 2-ով


// let x = [22, 10, 35, 55, 12, 24, 35, 1555, 3548];
// let y = [];
// let i = 0;

// while (i < x.length) {
//     y[i] = x[i] * 2;
//     i++;
// }

// alert(y);








// Գտնում ենք կենտ թվերը


// let x = [11, 22, 56, 41, 74, 53, 57, 100];
// let y = [];
// let i = 0;
// let i2 = 0;

// while (i < x.length) {
//     if (x[i] % 2 !== 0) {
//         y[i2] = x[i];
//         i2++;
//     }
//     i++;
// }
// alert(y);








// Ֆունկցիա

// let add = function (y, z) {
//     return y + z;
// };

// alert(add(99, 100));






// Ֆունկցիա

// function pow(x, n) {
//     let result = x;

//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// let x = +prompt("x?", '');
// let n = +prompt("n?", '');

// if (n < 1) {
//     alert(`Степень ${n} не поддерживается, используйте натуральное число`)
// } else {
//     alert( pow(x, n) );
// }





// Վարժություն Բուլյանով


// let y = 66;
// let x = 5;
// let z = 9, a = 71;
// let o = [132];
// o[5] = 4; // [132, undefined, undefined, undefined, undefined, 4]

// alert(((!!!(z === 1+3*2+(5%2))) && !(o[0] === 662)) || (x*y<100 && o.length >= 6)); // true







// Գումարում ֆունկցիա

// let sum = function(numbers) {
//     let result = 0;
//     let i = 0;
//     while (i < numbers.length) {
//         result = result + numbers[i];
//         i++
//     };

//     return result;
// }

// alert(sum([10,20,30])) // = 60






// Վարժություն scope (սահման)

// let a = 9;

// if (a > 0) {
//     let b = 2;

//     if (b > 0) {
//         let a = 3;
//         alert(a + b); // 5
//     }

//     b = 4;
//     alert(b + a); // 13

//     let i = 0;
//     while (i < 2) {
//         alert(i + b + a); // 13
//         i = i + 2;
//     }
//     alert(i); // 2
// }
// alert(a) // 9



//  Քննություն:

//1. JavaScript - ը ծրագրավորման լեզու է որը հետո թարգմանվում է համակարգչային լեզվին, որպեսզի մեր հրամանները, մտքերը, ալգորիթմները կարողանա աշխատացնի

//2. let num = 5;  // Փոփոխականներ

//3. number, string, boolean, bigInt, [], {}, function(), undefined, null // Արժեքներ

//4. undefined; // Մինչև փոփոխականի զանգվածին արժեք տալը

//5. ===, >, <, >=, <=; // Համեմատման օպերատորներ

//6. function ();  // Ֆունկցիայի ստեղծում

//7. + - * / %; // Մաթեմատիկական օպերատորներ

//8. "strings " + "strings"; // Տեքստը տեքստին կպցնել

//9. Թիվը տեքստի կամ տեքստը թվի վերածելու համար դնում ենք + նշանը;

//10. true && false === false,  true && true === true, false && false === false;   true || false === true,  true || true === true, false || false === false;  ! - Ոչ   // Բուլյան օպերատորներ

//11. if/else

// let num = +prompt("Գրեք թիվ մինչև 50");
// if (num < 50) {
//     alert("Փոքր է 50-ից");
// } else if (num === 50) {
//     alert("Հավասար է 50-ին");
// } else {
//     alert("Մեծ է 50-ից")
// }



//12. Ցիկլ while

// let num = 10;
// let i = 1;

// while (i < 10) {
//     alert(i);
//     i++;
// }


//13. Ինչպես ենք ստեղծում զանգված, կարդում և գտնում երկարությունը

// let x = [4, 20, 8];
// x[0] = 10; // [10, 20, 8]
// x.length // զանգվածի երկարությունը, վերջին ինդեքսը + 1





// 14.Բազմաչափ զանգվածի օրինակ
// let mas = [10, 15, [], 24, "Hi", [14, 35, [10, 21, 34, 52]]];



// 15. Գրեք ծրագիր, որը կհարցնի user-ից նրա տարիքը։ Եթե տարիքը փոքր է 10-ից, ցույց տվեք “hi” տեքստով պատուհան(alert)։ Եթե տարիքը մեծ է կամ հավասար 10, բայց փոքր է 18-ից, ցույց տվեք “hello” տեքստով պատուհան։ Մնացած բոլոր դեպքերում ցույց տվեք “greetings” տեքստով պատուհան 


// let userAnswer = +prompt("Քանի տարեկան եք?");

// if (userAnswer < 10) {
//     alert("Hi");
// } else if (userAnswer >= 10 && userAnswer < 18) {
//     alert("Hello");
// } else {
//     alert("greetings");
// }


//16. Գրեք ծրագիր, որը user-ից կշարունակի խնդրել թիվ մուտքագրել։ Երբ user-ը մուտքագրի “exit”, ցույց տվեք պատուհան (alert), որը կտպի մինչև այդ գրված բոլոր թվերի գումարը և կավարտի ծրագիրը։


// let result = 0;
// while(true) {
//     let answer = prompt("Please provide your answer")
//     if (answer === "exit") {
//         alert("Result is " +result)
//         break;
//     }

//     let num = +answer;
//     result = result + num;
// }




//17. Գրեք computeTriangleArea անունով ֆունկցիա, որը կվերցնի եռանկյան հիմքը և բարձրությունը և կվերադարձնի եռանկյան մակերեսը։ Օրինակ computeTriangleArea(2, 9)․ պետք է վերադարձի 9 որպես արդյունք։

// let computeTriangleArea = function(base, height) {
//     return (base * height) / 2;
// }

// alert(computeTriangleArea(2, 9));





//18. Գրեք reverse անունով ֆունկցիա, որը կվերցնի զանգված և կվերադարձնի մի նոր զանգված, որի արժեքները նույնն են ինչ առաջին զանգվածինը, բայց համակարգված են հակառակ դասավորությամբ։ Օրինակ reverse([1, 2, 3, 4])․ պետք է վերադարձնի նոր զանգված նման արժեքներով՝ [4, 3, 2, 1]


// let reverse = function(arr) {
//     let resultArr = [];

//     let i1 = 0;
//     let i2 = arr.length - 1;

//     while (i2 >= 0) {
//         resultArr[i1] = arr[i2];
//         i1++
//         i2--
//     }

//     return resultArr;
// }
// alert(reverse([1, 2, 3, 4]))






//19. Գրեք average անունով ֆունկցիա, որը կվերցնի թվերի զանգված, և կվերադարձնի այդ թվերի հանրահաշվական միջինը։ Օրինակ average([4, 3, 6, 10, 2])․ պետք է վերադարձի 5։


// let average = function(arr) {
//     let runningSum = 0;
//     let i = 0;

//     while (i < arr.length) {
//         runningSum = runningSum + arr[i];
//         i++
//     }
//     return runningSum / arr.length;
// }

// alert(average([4, 3, 6, 10, 2]));






//20. Գրեք factorial անունով ֆունկցիա, որը կվերցնի թիվ և կվերադարձնի այդ թվի ֆակտորիալը։ Հիշեք, որ թվի ֆակտորիալը, տրված թվից մինչև 1 բոլոր բնական թվերի արտադրյալն է։ Օրինակ factorial(5)․ պետք է վերադարձի 120։

// let factorial = function(num) {
//     let result = 1;

//     while (num > 1) {
//         result = result * num;
//         num--
//     }

//     return result;
// }
// alert(factorial(5));



// function fact(number) {
//   if(number <= 1) {
//     return 1
//   }
//   return number * fact(number - 1)
// }
// alert(fact(5))







// Օբյեկտներ (Object)


// Սա գրելու մի տեսակ:

// let information = {};
// information["name"] = "Aram";
// information["age"] = 16;
// information["address"] = {};
// information["address"]["city"] = "Yerevan";
// information["address"]["street"] = "Baghramyan";


// Սա գրելու մյոս տեսակ:

// let person = {
//     name: "Joe",
//     age: 18,
//     addres: {
//         city: "Vanadzor",
//         street: "Tigran Met's",
//         aprtNum: 64
//     },
//     friends: [
//         {
//             name: "Michael",
//             age: 23
//         },
//         {
//             name: "Narek",
//             age: 21
//         }
//     ]
// };





// Տեղափոխություն դեպի նոր օբյեկտի մեջ assing
// let userInfo = {
//     name: 'Вася',
//     age: 18,
// }

// let user = Object.assign({}, userInfo);

// user.age = 22;

// console.log(userInfo.age); // 18
// console.log(user.age); // 22







// Վարժություն (Array)

// let f = function(num) {
//     return num * 2;
// };

// let x = [
//     {
//         y: [f(1), f(10)]
//     },
//     {
//         z: {
//             a: {
//                 b: [f(7), f(9)]
//             },
//             c: {
//                 z: [f(20), f(12), f(21)]
//             }
//         }
//     },
//     20,
//     [
//         [7, 5, 2]
//     ],
//     f
// ]

// alert(x[0].y[1] + x[3][0][2] + x[2] + x[4](5));   // 52







// forEach function

// let a = [5, 20, 55];

// a.forEach(function(val, i) {
//     alert("What a great number " + val + " which is at index " + i);
// });



// forEach function Վարժություն


// let a = [3, 7, 2, 4];

// let f = function (a) {
//     return a + 2;
// };

// let z = 0;
// a.forEach(function(val) {
//     z = z + f(val) + 2;
// });

// let f2 = function(d) {
//     return f(d) + f(d);
// };

// let f3 = function(d) {
//     return f2(d) + 1;
// };

// alert(f(f3(f2(z))));   // 143





// map function()

// let people = [
//     {
//         name: "Joe",
//         lastName: "Mikaelyan"
//     },
//     {
//         name: "Ruben",
//         lastName: "Saribekyan"
//     }
// ]

// let names = people.map(function(val, i) {
//     return val.name;
// });

// alert(names);




// filter function()

// let people = [
//     {
//         name: "Joe",
//         age: 30
//     },
//     {
//         name: "Mike",
//         age: 14
//     },
//     {
//         name: "Jane",
//         age: 25
//     }
// ];


// let result = people.filter(function(person) {
//     return person.age >= 18;
// }).map(function(person) {
//     return person.name
// });

// alert(result);










// JSON.stringyfy()    JSON.parse()

// let a = {
//     name: "Joe",
//     age: 18,
//     phone: "54587357"
// };

//(Object.keys(a);  // Վերցնում է բանալիները name, age, phone
//(Object.values(a);  // Վերցնում է արժեքները Joe, 18, 54587357

// let str = JSON.stringify(a);  // JSON.stringify() -  Objecty veracum e texti....    JSON.parse() -  texty veracum e objecti

// localStorage.setItem("test1", str);  // save e anum brazueri mej




// let a = localStorage.getItem("test1"); // save arac kody brazueri mejic stanum e ete arden arel enq setItem
// let obj = JSON.parse(a); // stacac texty veracum e objecti
// alert(obj.name); // ev objecti meji name nkarum e



// JSON 2 դաս


// let a = {
//   name: "Joe",
//   phone: "4848648",
//   friends: [
//     "Mike", "Jane", "Jeckie"
//   ],
//   //  sayHi: function() {
//   //  alert("Hi");      // Սա սխալ է: Ֆունկցիան չենք դնում մի տեղ որտեղ կանչվում է stringify(), այլ ստեղծում ենք նոր օբյեկտ և  տեղադրում այդտեղ
// };

// let b = {
//   f: function () {

//   },
//   c: function () {

//   }
// };

// alert(JSON.stringify(a, undefined, 5));




// Վարժություն function();

// let y = 10;

// let div = function(t, s) {
//     return t / s;
// };

//  let dip = function(y, zoo) { 
//      return zoo(y) * zoo(y);
//  };

//  let yup = function(c) {
//     return div(y, 2);
//  }

//  let d = dip(4, yup);

//  alert(d);  // Ինչ արժեք ունի d-ն?  // 25






// Առանց reduce

// let sum = function(arr) {
//     let aggr = 0;
//     arr.forEach(function(val) {
//         aggr += val;
//     });
//     return aggr;
// }
// alert(sum([5, 15, 3, 10]));



// reduce function() թվերի հետ
// Այստեղ վերցնում է զանգվածի բոլոր արժեքները և վերադարձնում գումարը

//  let a = [5, 15, 3, 10].reduce(function(aggr, val) {
// 	return aggr + val;
// }, 0);

// alert(a); 


// function sum(arr) {
//   return arr.reduce(function(aggr, val) {
//     if(Array.isArray(val)) {
//       return aggr + sum(val);
//     }
//     return aggr + val;
//   }, 0)
// }

// alert(sum([10, 11, 12, 5, 6, 7, 4, 5, 6]))



// reduce function() object-ի հետ

// let a = [
// 	{
//   	name: "Joe"
//   },
//   {
//   	age: 20
//   },
//   {
//   	phone: "454849848"
//   }
// ];

// let b = a.reduce(function(aggr, val) {
// 	if(val.name !== undefined) {
//   	aggr.name = val.name;
//   }
//   if(val.age !== undefined) {
//   	aggr.age = val.age;
//   }
//   if(val.phone !== undefined) {
//   	aggr.phone = val.phone;
//   }
//   return aggr;
// }, {});

// alert(JSON.stringify(b, undefined, 2)); 






// Unshit(), Shift(), Push(), Pop()

// let x = [15, 20, 35];

// x.unshift(7) // Ավելացնում է սկզբից
// x.shift() // Հանում է սկզբից
// x.push(220) // Ավելացնում է վերջից
// x.pop() // Ջնջում է վԵրջից




// concat function  Կպցնում է իրար

/* let x = [22, 10, 35];
let y = [12, 37, 48];

alert(x.concat(y)); */




// findIndex function  Գտնում է որ ինդեքսում է գտնվում
// find Գտնում է արժեքը
// let x = [20, 5, 155, 200, 3];

// alert(x.find(function(val) {
//     return val > 50
// }));






// toUpperCase, toLowerCase, substring(startIdx, endIdx), split, replaceAll(search, replaceTxt)

//  function nameToUpper(name) {
//     return name.substring(0, 1).toUpperCase() + name.substring(1, name.length).toLowerCase();
// }

// alert(nameToUpper("roubeN")); 




// function foo(name) {
//     let names = name.split(" "); // Ջարդում է պռաբելներից ["erik", "khachatryan", "vahrami"]
//     let upperNames = names.map(function(val) { // մի զանգվածից ստանում ենք ուրիշ զանգված
//         return val.substring(0, 1).toUpperCase() + val.substring(1, val.length).toLowerCase(); // Վերցնում ենք բառի առաջին տառերը, սարքում մեծատառ + կպցնում մնացած տեքստին և մնացած տեքստը սարքում փոքրառատ ["Erik", "Khachatryan", "Vahrami"]
//     }); //

//     return upperNames.join(" "); // Անջատում է պռաբելով առանց ստորակետի... Erik Vahrami Khachatryan
// }

// alert(foo("erik khachatryan vahrami")); 



// replace, replaceAll Փոխարինում ենք տեքստը
// let a = "Кто там будет?";
// let b = a.replaceAll("будет?", "под забором");
// alert(b) 


// search... Գտնում է որ ինդեքսում է գտնվում
// let a = "Кто был здесь?";
// let b = a.search("был");
// alert(b);




// Մաթեմատիկական ֆունկցիաներ
/*
Math
    round // Կլորացնում է օր. Math.round(3.5) կլինի 4
    floor // Կլորացնում է դեպի ներքև օր. Math.floor(3.9) կլինի 3
    ceil // Կլորացնում է դեպի վերև օր. Math.ceil(3.1) կլինի 4

    min // օր. alert(Math.min([15, 20, 7, 14])); կլինի 7
    max // օր. alert(Math.max([15, 20, 7, 14])); կլինի 20

    pow // օր. alert(Math.pow(2, 3)); // 2 * 2 * 2

    random // 0 - 1
*/


// 10-ից 20 թիվ է նկարում և կլորացնում վերև կամ ներքև
// console.log(Math.round(Math.random() * 10) + 10);





// Գրել ֆունկցիա transform անունով, որը կստանա օբյեկտներից կազմված զանգված հետևյալ տեսքի՝
// Ֆունկցիան պետք է զանգվածից ստանա միայն այն արժեքները, որոնց gender-ի արժեքը "female" է, և վերադարձնի այդ օբյեկտներից կազմված զանգված հետևյալ տեսքի՝



// Օրինակ՝

//   transform([
//      {fn: "Kate", ln: "Karapetyan", ph: "039 323 233", gender: "female" },
//      {fn: "Joe", ln: "Mikaelyan", ph: "039 323 233", gender: "male" },
//      {fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male" },
//      {fn: "Jill", ln: "Isahakyan", ph: "039 323 233", gender: "female" }
//  ]);

// վերադարձնում է՝
// [
//    {firstName: "Kate", lastName: "Karapetyan", phone: "039 323 233", gender: "female" },
//    {firstName: "Jill", lastName: "Isahakyan", phone: "039 323 233", gender: "female" }
// ]



// function transform(arr) {
//     return arr.filter(function(obj) {
//         return obj.gender === "female";
//     }).map(function(obj) {
//         return {
//             firsName: obj.fn,
//             lastName: obj.ln,
//             phone: obj.ph,
//             gender: obj.gender
//         }
//     });;
// }

// alert(JSON.stringify(transform([{
//         fn: "Joe",
//         ln: "Mikaelyan",
//         ph: "039 323 233",
//         gender: "male"
//     },
//     {
//         fn: "Mike",
//         ln: "Hovsepyan",
//         ph: "039 323 233",
//         gender: "male"
//     },
//     {
//         fn: "Jane",
//         ln: "Karapetyan",
//         ph: "039 323 233",
//         gender: "female"
//     },
//     {
//         fn: "Jill",
//         ln: "Isahakyan",
//         ph: "039 323 233",
//         gender: "female"
//     }
// ]), undefined, 2));





/* Ստեղծել ֆունցկիա , getAvgAgeByColor անունով,  որը որպես արգումենտ ստանում է զանգված, որի ամեն անդամը օբյեկտ է որտեղ գրված է մարդու մասին ինֆորմացիա (անուն, տարիք, մազերի գույն) եվ ստանում է երկրորդ արգումենտ մազերի գույն։  Ֆունկցիան պետք է վերադարձնի միջին տարիքը այն մարդկանց ում մազերի գույնը համապատասխանում է երկրորդ արգումենտով փոխանցված գույնին։ */


// օրինակ։
/*  getAvgAgeByColor([
     {name: "Joe", age: 13, hairColor: "red"},
     {name: "Mike", age: 10, hairColor: "brown"},
     {name: "Jane", age: 4, hairColor: "red"},
     {name: "Susan", age: 30, hairColor: "brown"}
 ], "brown"); */
// պետք է վերադարձնի 20,  միջին տարիքը այն մարդկանց ում մազերի գույնը շագանակագույն է։



/* function getAvgAgeByColor(arr, hairColor) {
    let filteredArr = arr.filter(function (obj) {
        return obj.hairColor === hairColor;
    });
    let totalAge = filteredArr.reduce(function (aggr, obj) {
        return aggr + obj.age;
    }, 0);
    return totalAge / filteredArr.length;
}

alert(getAvgAgeByColor([
    {
        name: "Joe",
        age: 13,
        hairColor: "red"
    },
    {
        name: "Mike",
        age: 10,
        hairColor: "brown"
    },
    {
        name: "Jane",
        age: 4,
        hairColor: "red"
    },
    {
        name: "Susan",
        age: 30,
        hairColor: "brown"
    }
], "brown")) */




// function getPersonWithMostFriendsByName(people, friendName) {
//   let filteredPeople = people.filter(function(personObj) {
//     return {
//       name: personObj.name,
//       count: personObj.friends.filter(function(friendObj) {
//         return friendObj.name === friendName;
//       }).length
//     };
//   });
//   const max = filteredPeople.reduce(function(aggr, obj) {
//     if(aggr === undefined) {
//       return obj;
//     }
//     if(obj.count > aggr.count) {
//       return obj
//     }
//     return aggr;
//   }, undefined)

//   return max.name
// }


// alert(JSON.stringify(getPersonWithMostFriendsByName([{
//     name: "Joe",
//     friends: [{
//         name: "Susan",
//         age: 12
//       },
//       {
//         name: "Jane",
//         age: 43
//       },
//       {
//         name: "Susan",
//         age: 33
//       }
//     ]
//   },
//   {
//     name: "Liz",
//     friends: [{
//         name: "Mila",
//         age: 12
//       },
//       {
//         name: "Susan",
//         age: 43
//       },
//       {
//         name: "Jane",
//         age: 33
//       }
//     ]
//   },
//   {
//     name: "Mike",
//     friends: [{
//         name: "Susan",
//         age: 12
//       },
//       {
//         name: "Susan",
//         age: 43
//       },
//       {
//         name: "Susan",
//         age: 33
//       }
//     ]
//   }
// ], "Susan")));






// function find(arr, searchText) {
//    return arr.filter(function(obj) {
//      const values = Object.values(obj);
//      for (let i = 0; i < values.length; i++) {
//        if ("" + values[i].search(searchText) !== -1) {
//          return true;
//        }
//      }
//      return false;
//    })
//  }

//  alert(JSON.stringify(find([{
//      name: "Apple",
//      color: "red"
//    },
//    {
//      name: "Banana",
//      color: "yellow"
//    },
//    {
//      name: "Orange",
//      color: "orange"
//    },
//    {
//      name: "Apple",
//      color: "yellow"
//    }
//  ], "yellow"), undefined, 2));







// Բանալին դարձնում ենք արժեք, արժեքը ՝ բանալի

// function magic(obj) {
//   return Object.keys(obj).reduce(function (aggr, key) {
//     aggr[obj[key]] = key;
//     return aggr;
//   }, {})
// }

// alert(JSON.stringify(magic({
//   firstName: "Michael",
//   lastName: "Jackson"
// }), undefined, 2));






// pow(5, 3); // վերադարձնում է 125 (5 * 5 * 5)
// pow(3, 2); // վերադարձնում է 9 (3 * 3)


// function pow(num1, num2) {
//     let result = num1;
//     while(num2 > 1) {
//         result *= num1;
//         num2--
//     }
//     return result;
// }

// alert(pow(3, 3)); 

// function pow(num1, num2) {
//   if(num2 === 0) {
//     return 1;
//   }
//   return num1 * pow(num1, num2 - 1)
// }

// alert(pow(3, 3)); 





// Ամենամեծ թիվը 

// Տարբերակ 1
// function max(arr) {
//     return Math.max(...arr);
//    }
// alert(max([50, 10, 500, 10, 30]));



// function removeAtIndex(arr, index) {
//    return arr.filter(function(val, i) {
//     return i !== index;
//    });
// }

// alert(removeAtIndex([5, 10, 15, 20], 2));




// function alertFreq(str) {
//     const a = str.split("");
//     const obj = a.reduce(function(aggr, val) {
//         if(aggr[val] === undefined) {
//             aggr[val] = 1;
//         } else {
//             aggr[val]++;
//         }
//         return aggr;
//     }, {});
//     Object.keys(obj).forEach(function(key) {
//         alert(`${key} : ${obj[key]}`);
//     })
// }

// alertFreq("Hello-World")





// Ռեկուրսիա (recursion) loop
// Ֆունկցիան կանչվում է իրենով այնքան ժամանակ մինչև ցիկլի ավարտը

//  function factorial(num) {
//     if(num <= 1) {
//         return 1;
//     }
//     return num * factorial(num - 1)
// }

// alert(factorial(5));



// function pow(x, y) {
//   if( y === 0) {
//     return 1
//   }
//   return x * pow(x, y - 1);
// }

// alert(pow(5, 3));




// function sum(arr) {
//   return arr.reduce(function(aggr, val) {
//     if(Array.isArray(val)) {
//       return aggr + sum(val);
//     }
//     return aggr + val;
//   }, 0)
// }

// alert(sum([10, 11, 12, [10, 35, [1, 2], 2]]));





// Վարժություն (recursive array sum)

// function sum(arr) {
//     return arr.reduce(function(aggr, val) {
//         if(Array.isArray(val)) {
//             return aggr + sum(val);
//         }
//         return aggr + val;
//     }, 0)
// }


// alert(sum([10, 20, 30, [40, 50, 15], 30]));





/*
function stringifyJSON(input) {
    // undefined
    if(input === undefined) {
       return input;
    }

    // null
    if(input === null) {
      return "null"; //
    }


    // NaN
    // number
    if(typeof(input) === "number") {
      if(isNaN(input)) {
        return "null";
      }

      return "" + input;
    }

    // boolean
    if(typeof(input) === "boolean") {
      return "" + input;
    }

    // string
    if(typeof(input) === "string") {
      return "\"" + input + "\"";
    }


    // array
    if(Array.isArray(input)) {
      return "[" + input.filter(function(val) {
        return typeof(val) !== "function";
      }).map(stringifyJSON).join(",") + "]";
    }

    // object
    return "{" + Object.keys(input).filter(function(key) {
      return typeof(input[key]) !== "function";
    }).map(function(key) {
      const value = input[key];
      return "\"" + key + "\":" + stringifyJSON(value);
    }) + "}";
  }


  const data = {
    "destination_addresses": [
      "Washington, DC, USA",
      "Philadelphia, PA, USA",
      "Santa Barbara, CA, USA",
      "Miami, FL, USA",
      "Austin, TX, USA",
      "Napa County, CA, USA"
    ],
    "origin_addresses": [
      "New York, NY, USA"
    ],
    "rows": [{
      "elements": [{
          "distance": {
            "text": "227 mi",
            "value": 365468,
            "isFar": true
          },
          "duration": {
            "text": "3 hours 54 mins",
            "value": 14064
          },
          "status": "OK"
        },
        {
          "distance": {
            "text": "94.6 mi",
            "value": 152193
          },
          "duration": {
            "text": "1 hour 44 mins",
            "value": 6227
          },
          "status": "OK"
        },
        {
          "distance": {
            "text": "2,878 mi",
            "value": 4632197
          },
          "duration": {
            "text": "1 day 18 hours",
            "value": 151772
          },
          "status": "OK"
        },
        {
          "distance": {
            "text": "1,286 mi",
            "value": 2069031
          },
          "duration": {
            "text": "18 hours 43 mins",
            "value": 67405
          },
          "status": "OK"
        },
        {
          "distance": {
            "text": "1,742 mi",
            "value": 2802972
          },
          "duration": {
            "text": "1 day 2 hours",
            "value": 93070
          },
          "status": "OK"
        },
        {
          "distance": {
            "text": "2,871 mi",
            "value": 4620514
          },
          "duration": {
            "text": "1 day 18 hours",
            "value": 152913
          },
          "status": "OK"
        }
      ]
    }],
    "status": "OK"
  };


  alert(JSON.stringify(data) === stringifyJSON(data));

*/








/*
const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const backgroundImg = document.createElement("img");
backgroundImg.src = "https://lumiere-a.akamaihd.net/v1/images/sa_pixar_virtualbg_coco_16x9_9ccd7110.jpeg?region=0,0,1920,1080";

const heroImg = document.createElement("img");
heroImg.src = "https://1001freedownloads.s3.amazonaws.com/vector/thumb/135655/nicubunu_Game_baddie_Ninja.png";

const starImg = document.createElement("img");
starImg.src = "https://blog.knife-depot.com/wp-content/uploads/2020/03/shuriken-676x676.png";

const rabbitImg = document.createElement("img");
rabbitImg.src = "https://preview.redd.it/4e15s7ljf2o41.png?width=256&format=png&auto=webp&s=99b4d97d6c2eeacbb218fc6e31773bd3aecc385c";

const stabAudio = document.createElement("audio");
stabAudio.src = "https://soundbible.com//mp3/Stab-SoundBible.com-766875573.mp3";


const audio = document.createElement("audio");
audio.src = "http://www.slspencer.com/Sounds/Star Trek Sounds/sounds/PhotonTorp.mp3";

let data = {
  hero: {
    xDelta: 0,
    yDelta: 0,
    x: 10,
    y: 140,
    width: 100,
    height: 100
  },
  bullets: [],
  rabbits: []
};

function intersect(rect1, rect2) {
    const x = Math.max(rect1.x, rect2.x),
        num1 = Math.min(rect1.x + rect1.width, rect2.x + rect2.width),
        y = Math.max(rect1.y, rect2.y),
        num2 = Math.min(rect1.y + rect1.height, rect2.y + rect2.height);
    return (num1 >= x && num2 >= y);
};

function update() {
  data.hero.x += data.hero.xDelta;
  data.hero.y += data.hero.yDelta;

  data.bullets.forEach(function(bullet) {
    data.rabbits.forEach(function(rabbit) {
      if(intersect(rabbit, bullet)) {
          stabAudio.currentTime = 0;
          stabAudio.play();
          bullet.deleteMe = true;
          rabbit.deleteMe = true;
      }
    });
  });

  data.bullets = data.bullets.filter(function(bullet) {
    return bullet.deleteMe !== true;
  });

  data.rabbits = data.rabbits.filter(function(rabbit) {
    return rabbit.deleteMe !== true;
  });


  data.bullets.forEach(function(bullet) {
    bullet.x += bullet.xDelta;
  });

  data.bullets = data.bullets.filter(function(bullet) {
    if (bullet.x > canvas.width) {
      return false;
    }
    return true;
  });

  data.rabbits.forEach(function(rabbit) {
    rabbit.x += rabbit.xDelta;
  });

  if(data.rabbits.length === 0) {
     data.rabbits.push({
       xDelta: -1,
       x: canvas.width - 100,
       y: data.hero.y,
       width: 100,
       height: 100
     });
  }
}

function draw() {
  context.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);

  context.drawImage(heroImg, data.hero.x, data.hero.y, data.hero.width, data.hero.height);

  data.bullets.forEach(function(bullet) {
    context.drawImage(starImg, bullet.x, bullet.y, bullet.width, bullet.height);
  });


  data.rabbits.forEach(function(rabbit) {
    context.drawImage(rabbitImg, rabbit.x, rabbit.y, rabbit.width, rabbit.height);
  });
}

function loop() {
  requestAnimationFrame(loop);
  update();
  draw();
}

loop();

document.addEventListener("keydown", function(evt) {
  if (evt.code === "ArrowRight") {
    data.hero.xDelta = 1;
  } else if (evt.code === "ArrowLeft") {
    data.hero.xDelta = -1;
  } else {
    audio.currentTime = 0;
    audio.play();
    data.bullets.push({
      xDelta: 5,
      x: data.hero.x + data.hero.width,
      y: data.hero.y + data.hero.height / 2,
      width: 20,
      height: 20
    });
  }
});
document.addEventListener("keyup", function(evt) {
  data.hero.xDelta = 0;
});
 */






// "use strict"

// function zoo(txt, x) {
//   alert(txt + " " + this.name);
// }

// let person = {
//   name: "Joe",
//   age: 20
// }

// 2-ն էլ նույն բանն է, ուղակի apply-ն որպես 2-րդ արժեք վերցնում է զանգված
// zoo.call(person, "my name is", 2);
// zoo.apply(person, ["my name is", 2])


// const f = zoo.bind(person);
// f("Hello World", 5) 





// function func(a) {
//   alert(this);
//   alert(a);
// }

// const obj = {
//   func: func
// }

//obj.func();  this = obj

// func(5) // this = window object/undefined

// func.apply(obj, [5]) // this = obj
// func.call(obj, 5)   // this = obj

// const boundFunc = func.bind(obj);
// boundFunc(5)

// const a = new func(5) // this = {}


/* function Person() {
  this.name = "Joe",
  this.age = 20
}

const a = new Person();
alert(a.name) */




// function Person() {
//   this.name = "Mike";
//   this.age = 33;
// }
// const a = new Person();
// alert(a);




// const a = {
//   name: "Joe",
//   foo: function(f) {
//     alert(this.name)
//   }
// };

// [1, 2, 3].forEach(a.foo.bind(a));



// վարժություն 1
// Փոխեք այս կոդը այնպես, որ այն alert անի 45

/* const a = {
  age: 23,
  foo: function(arr) {
      arr.forEach(function(val) {
          alert(this.age + val);
      }.bind(this)); // bind(this)
  }
};
a.foo([22]); */





// վարժություն 2
// Ի՞նչը alert կարվի էկրանին և ինչու

/* function zoo() {
  alert(this.age);
}
const b = {
  age: 44
};
const a = {
  age: 23,
  foo: zoo.bind(b)
};
a.foo(); */









// վարժություն 3
// Փոխեք այս կոդը այնպես, որ այն alert անի "Mike"


// const a = {
//   name: "Joe",
//   f: function () {
//     alert(this.name);
//   }
// }
// const b = {
//   name: "Mike"
// };
//   a.f();       // a.f.call(b);






// վարժություն 4
// Փոխեք այս կոդը այնպես, որ այն ստեղծի նոր Person օբյեկտ

//  function Person(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   const a = new Person("Mike", 33);
//   alert(JSON.stringify(a, undefined, 2)); 




// const a = {
//   age: 22,
//   name: "Joe",
//   getName: function() {
//     return this.name;
//   },
//   getAge: () => {
//     return this.age;
//   }
// };

// alert(a.getName());
// alert(a.getAge()); 




// let a = [5, 30, 35, 21, 34];

// function transform(arr) {
//   return arr
//     .map((val) => val + 1)
//     .filter((val) => val % 2 === 0)
// }

// alert(transform(a)) // [6, 36, 22]





/*
  function generate() {
    const quotes = {
      "― Jules Renard": "“The truly free man is the one who can turn down an invitation to dinner without giving an excuse.”",
      "― Albert Einstein": "“Our task must be to free ourselves... by widening our circle of compassion to embrace all living creatures and the whole of nature and it's beauty.”",
      "― Candace Bushnell": "“Maybe some women aren't meant to be tamed. Maybe they just need to run free until they find someone just as wild to run with them.”"
    }

    const authors = Object.keys(quotes);
    const author = authors[Math.floor(Math.random() * authors.length)];
    const quote = quotes[author];

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
  } */



// function myFirstApp() {
//   let userName = prompt("Как тебя зовут?", '');
//   alert(`Привет, меня зовут ${userName} и это моя первая программа`);

//   let userSkills = prompt("Какие навыки ты владеешь?");
//   alert(`Я владею ${userSkills}`);

//   let userAge = +prompt('Сколько вам лет?', '');
//   if (userAge > 18) {
//     alert("У тебя отличные шансы стать FrontEnd dev")
//   } else {
//     alert("Круто что ты так рано задумался своем будещем :)");
//   }
// }
// myFirstApp();


// function reduce(arr, fun, aggr) {
//   arr.forEach(function (val, i) {
//     if (i === 0 && aggr === undefined) {
//       aggr = val;
//     } else {
//       aggr = fun(aggr, val, i);
//     }
//   })
//   return aggr;
// }
// alert(reduce([5, 9, 10], function (acc, val, i) {
//   return acc + val
// }, 0))

// reduce([5, 9, 10], function(acc, val, i) {   // should return 24
//   return acc + val;
// }, 0);



// function polindrom


// function palindrom(text) {
//   for(let i = 0; i < text.length; i++) {
//     if(text[i] !== text[text.length - 1 - i]) {
//       return false
//     }
//   }
//   return true;
// }

// alert(palindrom("aacbcaa"))



// https://github.com/jeantimex/javascript-problems-and-solutions#array