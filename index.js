// const numbers = document.querySelectorAll('.numbers');
// const result = document.querySelector('.result span');
// const signs = document.querySelectorAll('.sign');
// const equals = document.querySelector('.equals');
// const clear = document.querySelector('.clear');
// const negative = document.querySelector('.negative');
// const percent = document.querySelector('.percent'); 

// let firstvalue = "";
// let isfirstvalue = false;
// let secondvalue = "";
// let issecondvalue = false;
// let sign = "";
// let resultvalue = 0;

// for(let i=0; i < numbers.length; i++){
//     numbers[i].addEventListener('click', (e) => {
//         let atr = e.target.getAttribute('value');
//         if(isfirstValue === false){
//             getFirstValue(atr)
//         }
//         if(issecondvalue == false){
//             getsecondvalue(atr);
//         }
// })
// }

// function getFirstValue(el){
//     result.innerHTML = "";
//     firstvalue += el;
//     result.innerHTML = firstvalue;
//     firstvalue =+firstvalue;
// }

// function getsecondvalue(el) {
//   if(firstvalue !==""&& sign !=="") {
//     secondvalue += el;
//     result.innerHTML = secondvalue;
//     secondvalue = +secondvalue;
//   }
// }

// function getsign(){
//     for(let i = 0; i < signs.length; i++) {
//         signs[i].addEventListener('click',(e) => {
//             sign = e.target.getAttribute('value');
//             isfirstvalue = true;
//         })
//     }
// }
// getsign();

// equals.addEventListener('click',() => {
//     result.innerHTML = "";
//     if(sign ==="+"){
//        resultvalue = firstvalue + secondvalue;
//     }else if(sign ==="-") {
//         resultvalue = firstvalue - secondvalue;
//     }else if(sign ==="x") {
//         resultvalue = firstvalue * secondvalue;
//     }else if(sign ==="/") {
//         resultvalue = firstvalue / secondvalue;
//     }
//     result.innerHTML = resultvalue;
//     firstvalue = resultvalue;
//     secondvalue ="";
// checkresultlength();


// })

// function checkresultlength() {
//     resultvalue = JSON.stringify(resultvalue);

//     if(resultvalue.length >= 8) {
//         resultvalue =JSON.parse(resultvalue);
//         result.innerHTML = resultvalue.toFixed(5);
//     }
// }

// negative.addEventListener('click', () => {
//     result.innerHTML = "";
//     if(firstvalue !=="") {
//         resultvalue = firstvalue / 100;
//         firstvalue = resultvalue;
//     }
//     if(firstvalue !== "" && secondvalue !== "" && sign != "") {
//        resultvalue= -resultvalue;
//     }

//     resultvalue.innerHTML = resultvalue;
// })

// percent.addEventListener('click', () => {
//     result.innerHTML = "";
//     if(firstvalue !== "") {
//         resultvalue = firstvalue /100;
//         resultvalue = resultvalue;
//     }
//     if(firstvalue !== "" && secondvalue !== "" && sign !== "") {
//         firstvalue = resultvalue/100;
//     }

//     result.innerHTML = resultvalue;
// })

// clear.addEventListener('click', () => {
//     firstvalue = "";
//  isfirstvalue = false;
// secondvalue = "";
//  issecondvalue = false;
//  sign = "";
//  resultvalue = 0;
// })
const numbers = document.querySelectorAll('.numbers');
const result = document.querySelector('.result span');
const signs = document.querySelectorAll('.sign');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const negative = document.querySelector('.negative');
const percent = document.querySelector('.percent');

let firstValue = ""; // Changed from firstvalue to firstValue
let isfirstValue = false; // Changed from isfirstvalue to isfirstValue
let secondValue = ""; // Changed from secondvalue to secondValue
let issecondValue = false; // Changed from issecondvalue to issecondValue
let sign = "";
let resultValue = 0;

for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener('click', (e) => {
        let atr = e.target.getAttribute('value');
        if (isfirstValue === false) {
            getFirstValue(atr);
        }
        if (issecondValue === false) { // Changed issecondvalue to issecondValue
            getSecondValue(atr); // Changed to getSecondValue
        }
    })
}

function getFirstValue(el) {
    result.innerHTML = "";
    firstValue += el; // Changed from firstvalue to firstValue
    result.innerHTML = firstValue;
    firstValue = +firstValue;
}

function getSecondValue(el) {
    if (firstValue !== "" && sign !== "") { // Changed != to !==
        secondValue += el; // Changed from secondvalue to secondValue
        result.innerHTML = secondValue;
        secondValue = +secondValue;
    }
}

function getSign() { // Changed getsign to getSign
    for (let i = 0; i < signs.length; i++) {
        signs[i].addEventListener('click', (e) => {
            sign = e.target.getAttribute('value');
            isfirstValue = true;
        })
    }
}
getSign();

equals.addEventListener('click', () => {
    result.innerHTML = "";
    if (sign === "+") {
        resultValue = firstValue + secondValue; // Changed firstvalue to firstValue and secondvalue to secondValue
    } else if (sign === "-") {
        resultValue = firstValue - secondValue; // Changed firstvalue to firstValue and secondvalue to secondValue
    } else if (sign === "x") {
        resultValue = firstValue * secondValue; // Changed firstvalue to firstValue and secondvalue to secondValue
    } else if (sign === "/") { // Changed = to ===
        resultValue = firstValue / secondValue; // Changed firstvalue to firstValue and secondvalue to secondValue
    }
    result.innerHTML = resultValue;
    firstValue = resultValue;
    secondValue = "";
    checkResultLength(); // Changed to checkResultLength
})

function checkResultLength() {
    resultValue = JSON.stringify(resultValue);

    if (resultValue.length >= 8) {
        resultValue = JSON.parse(resultValue);
        result.innerHTML = resultValue.toFixed(5);
    }
}

negative.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue !== "") { // Changed != to !==
        resultValue = firstValue / 100; // Changed firstvalue to firstValue
        firstValue = resultValue;
    }
    if (firstValue !== "" && secondValue !== "" && sign !== "") { // Changed != to !==
        resultValue = -resultValue; // Changed firstvalue to resultValue
    }

    result.innerHTML = resultValue;
})

percent.addEventListener('click', () => {
    result.innerHTML = "";
    if (firstValue !== "") { // Changed != to !==
        resultValue = firstValue / 100; // Changed firstvalue to firstValue
        firstValue = resultValue;
    }
    if (firstValue !== "" && secondValue !== "" && sign !== "") { // Changed != to !==
        resultValue = resultValue / 100; // Changed firstvalue to resultValue
    }

    result.innerHTML = resultValue;
})

clear.addEventListener('click', () => {
    firstValue = ""; // Changed firstvalue to firstValue
    isfirstValue = false;
    secondValue = ""; // Changed secondvalue to secondValue
    issecondValue = false; // Changed issecondvalue to issecondValue
    sign = "";
    resultValue = 0; // Changed resultvalue to resultValue
})